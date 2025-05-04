
import { getImagesService, uploadImageService } from "../services/imageService.js";
import createError from "../utils/createError.js";

/// Controlleur pour recuperer toutes les images d'un event ///

export const getImagesController = async (req, res, next) => {
    try {

        const { eventId } = req.params; 

        if (!eventId) {
            throw createError("Champs requis manquants !", 400);
        }

        const parsedEventId = parseInt(eventId);

        const images = await getImagesService(parsedEventId);

        if(!images) {
            throw createError("Une erreur s'est produite lors de la récuperation.", 400);
        }
    
        res.status(200).json(images);

    } catch (error) {
        next(error);
    }
};

/// Controlleur pour uploader une image sur GCS via multer en memory ///

export const uploadImageController = async (req, res, next) => {

    try {
        
        const { eventId, tags } = req.body;
        const file = req.file;
        
        if (!eventId || !tags || !file) {
            throw createError("Champs requis manquants (event, tags, image) !", 400);
        }

        const parsedTags = JSON.parse(tags);
        const parsedEventId = parseInt(eventId);

        const uploadedImage = await uploadImageService(file, parsedEventId, parsedTags);

        if (!uploadedImage) {
            throw createError("Une erreur s'est produite lors de l'upload", 400);
        }

        res.status(201).json({ message: "L'image a bien été uploadé!" })

    } catch (error) {
        next(error);
    }
};

/// Controlleur pour delete une image ///

export const deleteImageController = async (req, res, next) => {
    /////////////
    /// #TODO ///
    /////////////
};