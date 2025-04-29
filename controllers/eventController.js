import { deleteEventById, getOneEvent, updateEventNameById } from "../repositories/eventRepository.js";
import { newEventSchema } from "../schemaValidation/eventSchema.js";
import { newEventService } from "../services/eventService.js";

export const newEvent = async (req, res) => {

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

export const deleteEvent = async (req, res) => {
    const { eventId } = req.params;

    try {

        await deleteEventById(parseInt(eventId));
        res.status(200).json({ message: "Événement supprimé avec succès" });
        
    } catch (error) {
        console.log(error);

        if (error.message === "Événement non trouvé") {
            return res.status(404).json({ message: "Événement non trouvé" });
        }
    }
}

export const updateEventName = async (req, res) => {
    const { eventId } = req.params;
    const { newName } = req.body;

    try {
        
        const existingEvent = await getOneEvent(eventId);

        if (!existingEvent) {
            res.status(404).json({ message: "Événement non trouvé" })
        }

        await updateEventNameById(eventId, newName);
        res.status(201).json({ message: "Événement modifié avec succès" })

    } catch (error) {
        console.log(error);
        
        return res.status(400).json({ message: "Erreur serveur" });
    }
};