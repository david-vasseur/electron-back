import path from 'path';
import { Storage } from '@google-cloud/storage';
import { fileURLToPath } from 'url';
import createError from '../utils/createError';
import { deleteImageById, insertImage } from '../repositories/imageRepository';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = new Storage({
    keyFilename: path.join(__dirname, '../gcs/electron-photo-1de49ac60352.json'),
  });

const bucketName = 'electron-photo-image';
const bucket = storage.bucket(bucketName);

/// Service pour delete une image ///

export const deleteImageService = async (fileName, imageId) => {

    try {

        const deletedImage = await deleteImageById(imageId);

        if (!deletedImage) {
            throw createError("Erreur lors de la suppression de l'image", 405);
        }

        await bucket.file(fileName).delete();

    } catch (error) {
        throw error
    }
};

/// Service pour upload une image ///

export const uploadImageService = async (eventId, tags, file) => {

    try {
        const blob = bucket.file(Date.now() + '-' + file.originalname);
        const blobStream = blob.createWriteStream({
            resumable: false,
            metadata: {
                contentType: file.mimetype,
                metadata: {
                    tags: tags.join(',') 
                  }
            },
        });

        const result = await new Promise((resolve, reject) => {
            
            blobStream.on('error', err => {
                reject(createError("Erreur lors de l'upload vers GCS:", 400));
            });

            blobStream.on('finish', async () => {
                const insertedImage = await insertImage(blob.name, eventId, tags);
    
                if (!insertedImage) {
                    throw createError("Une erreur d'ecriture s'est produite", 400);
                }
    
                resolve(insertedImage);
            });

            blobStream.end(file.buffer);
        });
            
        return result;
                
    } catch (error) {
        throw error
    }
};

/// Service pour récuperer les images d'un event ///

export const getImagesService = async (eventId) => {

    try {
        const images = await getImagesByEvent(eventId);

        if (!images) {
            throw createError("Erreur de récuperation serveur", 400);
        }

        const signedUrls = await Promise.all(images.map(async (image) => {
            let fileName = image.name;
        
            const file = bucket.file(fileName); 
        
            const [exists] = await file.exists(); 
            if (!exists) {
                return {
                    id: image.id,
                    name: fileName,
                    event: image.event,
                    error: 'Fichier non trouvé dans le bucket.',
                };
            };
        
            const [url] = await file.getSignedUrl({
                action: 'read',
                expires: Date.now() + 3600 * 1000, 
            });
        
            return {
                id: image.id,
                name: fileName,
                event: image.event,
                url: url, 
            };
        }));
        
        return signedUrls;

    } catch (error) {
        throw error
    }
};