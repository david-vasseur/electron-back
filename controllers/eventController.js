import { deleteEventSchema, newEventSchema, updateNameSchema } from "../schemaValidation/eventSchema.js";
import { deleteEventService, newEventService, updateEventAccessService, updateEventNameService } from "../services/eventService.js";

// Controller pour creer un event ///

export const newEventController = async (req, res) => {

    try {

        const { error } = newEventSchema.validate(req.body);

            if (error) {
                res.status(400).json({ message: "Erreur de données" });
                return;
            }

        const { name } = req.body;
        const userId = parseInt(req.user.id);

        const event = await newEventService(userId, name);
        res.status(200).json({ message: "Event créé avec succés !!", event })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

/// Controller pour supprimer un event ///

export const deleteEventController = async (req, res) => {

    try {

        const { error } = deleteEventSchema.validate(req.params);

            if (error) {
                res.status(400).json({ message: "Erreur de données" });
                return;
            }

        const { eventId } = req.params;
        const parsedEventId = parseInt(eventId);

        const event = await deleteEventService(parsedEventId);
        res.status(200).json({ message: "Événement supprimé avec succès", event });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

/// Controller pour mettre a jour le nom d'un event ///

export const updateEventNameController = async (req, res) => {

    try {

        const { error } = updateNameSchema.validate({ ...req.body, ...req.params });

            if (error) {
                res.status(400).json({ message: "Erreur de données" });
                return;
            }

        const { eventId } = req.params;
        const { newName } = req.body;
        const parsedEventId = parseInt(eventId);
        
        const event = await updateEventNameService(parsedEventId, newName);
        res.status(201).json({ message: "Événement modifié avec succès", event })

    } catch (error) {
        console.log(error);
        next(error);
    }
};

/// Controller pour mettre a jour public/private d'un event ///

export const updateEventAccessController = async (req, res) => {

    try {

        const { error } = deleteEventSchema.validate(req.params);

            if (error) {
                res.status(400).json({ message: "Erreur de données" });
                return;
            }

        const { eventId } = req.params;
        const parsedEventId = parseInt(eventId);
        
        const event = await updateEventAccessService(parsedEventId);
        res.status(201).json({ message: "Événement modifié avec succès", event })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};