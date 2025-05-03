import { getImagesByEvent, insertImage } from "../repositories/imageRepository.js";
import path from 'path';
import { Storage } from '@google-cloud/storage';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = new Storage({
    keyFilename: path.join(__dirname, '../gcs/electron-photo-1de49ac60352.json'),
  });

const bucketName = 'electron-photo-image';
const bucket = storage.bucket(bucketName);

/// Controlleur pour recuperer toutes les images d'un event ///

export const getAllImagesByEvent = async (req, res) => {
    try {
        const { eventId } = req.params; 
        const images = await getImagesByEvent(eventId);
    
        const signedUrls = await Promise.all(images.map(async (image) => {
            let fileName = image.name;

            if (!fileName.includes('.')) {
                fileName += '.jpeg'; 
            }
        
            const file = bucket.file(fileName); 
        
            const [exists] = await file.exists(); 
            if (!exists) {
                return {
                name: fileName,
                event: image.event,
                error: 'Fichier non trouvé dans le bucket.',
                };
            }
        
            const [url] = await file.getSignedUrl({
                action: 'read',
                expires: Date.now() + 3600 * 1000, 
            });
        
            return {
                name: fileName,
                event: image.event,
                url: url, 
            };
        }));
    
        res.status(200).json(signedUrls);
    } catch (error) {
        console.error("Erreur lors de la récupération des images:", error);
        res.status(500).json({ message: "Erreur du serveur !" });
    }
};

/// Controlleur pour uploader une image sur GCS via multer en memory ///

export const uploadImage = async (req, res) => {

    try {
        
        const { name, eventId, tags } = req.body;
        const file = req.file;
        console.log(req.file);
        
        if (!name || !eventId || !tags || !file) {
            return res.status(400).json({ message: "Champs requis manquants (name, event, tags, image) !" });
        }

        const parsedTags = JSON.parse(tags);
        const blob = bucket.file(Date.now() + '-' + file.originalname);
        const blobStream = blob.createWriteStream({
            resumable: false,
            metadata: {
                contentType: file.mimetype,
                metadata: {
                    tags: parsedTags.join(',') 
                  }
            },
        });

        blobStream.end(file.buffer);
  
        blobStream.on('error', err => {
            console.error("Erreur lors de l'upload vers GCS:", err);
            res.status(500).json({ message: "Erreur lors de l'upload de l'image" });
        });
    
        blobStream.on('finish', async () => {
            await insertImage(blob.name, parseInt(eventId), tags)
            res.status(201).json({ message: "L'image a bien été uploadé!" })
        })
        

    } catch (error) {
        console.error("Erreur lors de la creation de l'image:", error);
        res.status(500).json({ message: "Erreur du serveur !" });
    }
}