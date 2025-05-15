import { deleteEventSchema, newEventSchema, updateNameSchema } from "../schemaValidation/eventSchema.js";
import { deleteEventService, newEventService, updateEventAccessService, updateEventNameService } from "../services/eventService.js";
import createError from "../utils/createError.js";

// Controller pour creer un event ///

export const newEventController = async (req, res, next) => {

    try {

        const { error } = newEventSchema.validate(req.body);

        if (error) {
            throw createError("Erreur de données", 400);
        }

        const { name } = req.body;
        const userId = parseInt(req.user.id);

        const event = await newEventService(userId, name);

        if (!event) {
            throw createError("Une erreur s'est produit lors de la création", 500);
        }

        res.status(201).json({ message: "Album créé avec succés !!", event });

    } catch (error) {
        next(error);
    }
};

/// Controller pour supprimer un event ///

export const deleteEventController = async (req, res, next) => {

    try {

        const { error } = deleteEventSchema.validate(req.params);

        if (error) {
            throw createError("Erreur de données", 400);
        }

        const { eventId } = req.params;
        const parsedEventId = parseInt(eventId);
        const userId = parseInt(req.user.id);

        const event = await deleteEventService(parsedEventId, userId);

        if (!event) {
            throw createError("Une erreur s'est produit lors de la suppression", 500);
        }

        res.status(200).json({ message: "Album supprimé avec succès", event });
        
    } catch (error) {
        next(error);
    }
};

/// Controller pour mettre a jour le nom d'un event ///

export const updateEventNameController = async (req, res, next) => {

    try {

        const { error } = updateNameSchema.validate({ ...req.body, ...req.params });

        if (error) {
            throw createError("Erreur de données", 400);
        }

        const { eventId } = req.params;
        const { newName } = req.body;
        const parsedEventId = parseInt(eventId);
        
        const event = await updateEventNameService(parsedEventId, newName);

        if (!event) {
            throw createError("Une erreur s'est produit lors de la modification", 500);
        }

        res.status(200).json({ message: "Le nom a été modifié avec succès", event })

    } catch (error) {
        next(error);
    }
};

/// Controller pour mettre a jour public/private d'un event ///

export const updateEventAccessController = async (req, res, next) => {

    try {

        const { error } = deleteEventSchema.validate(req.params);

        if (error) {
            throw createError("Erreur de données", 400);
        }

        const { eventId } = req.params;
        const parsedEventId = parseInt(eventId);
        
        const event = await updateEventAccessService(parsedEventId);

        if (!event) {
            throw createError("Une erreur s'est produit lors de la modification", 500);
        }
        
        res.status(200).json({ message: `Votre album est maintenant ${event.public === true ? "publique" : "privé"}`, event });

    } catch (error) {
        next(error);
    }
};