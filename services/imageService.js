import path from 'path';
import { Storage } from '@google-cloud/storage';
import { fileURLToPath } from 'url';
import createError from '../utils/createError.js';
import { deleteImageById, getImagesByEvent, getImagesByTag, insertImage } from '../repositories/imageRepository.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = new Storage({
    keyFilename: path.join(__dirname, '../gcs/electron-photo-1de49ac60352.json'),
  });

const bucketName = 'electron-photo-image';
const bucket = storage.bucket(bucketName);

/// Service pour delete une image ///

export const deleteImageService = async (imageName, imageId) => {

    try {

        const deletedImage = await deleteImageById(imageId);

        if (!deletedImage) {
            throw createError("Erreur lors de la suppression de l'image", 405);
        }

        await bucket.file(imageName).delete();

        return deletedImage;

    } catch (error) {
        throw error
    }
};

/// Service pour upload une image ///

export const uploadImageService = async (file, eventId, tags) => {

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
        throw error;
    }
};

/// Service pour recupere les images par rapport a un tag ///

export const getImagesByTagService = async (tagName, userId, userRole) => {
    
    try {
        const images = getImagesByTag(tagName, userId, userRole); 
        
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
        throw error;
    }
};