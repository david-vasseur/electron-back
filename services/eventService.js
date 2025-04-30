import { createEvent, deleteEventById, getOneEvent, updateEventAccessById, updateEventNameById } from "../repositories/eventRepository.js";
import { getUserById } from "../repositories/userRepository.js";

/// Service pour creer un event ///

export const newEventService = async (userId, name) => {
  
    try {
        const verifUser = await getUserById(userId);   

            if (!verifUser) {
                throw new Error("Utilisateur inexistant")
            };

        const newEvent = await createEvent(userId, name);

            return newEvent;

    } catch (error) {
        throw error;
    }
};

/// Service pour supprimer un event ///

export const deleteEventService = async (eventId) => {

    try {

        const existingEvent = await getOneEvent(eventId);

        if (!existingEvent) {
            throw new Error("Event introuvable");
        }

        const event = await deleteEventById(eventId);

        if (!event) {
            throw new Error("Erreur lors de la suppression de l'événement.");
        }

        return event;
        
    } catch (error) {
        throw error;
    }
};

/// Service pour mettre a jour le nom d'un event ///

export const updateEventNameService = async (eventId, newName) => {

    try {

        const existingEvent = await getOneEvent(eventId);

        if (!existingEvent) {
            throw new Error("Event introuvable");
        }

        const event = await updateEventNameById(eventId, newName);

        if (!event) {
            throw new Error("Erreur lors de la mise a jour de l'événement.");
        }

        return event;

    } catch (error) {
        throw error;
    }
};

/// Service pour mettre a jour public/private d'un event ///

export const updateEventAccessService = async (eventId) => {

    try {

        const existingEvent = await getOneEvent(eventId);

        if (!existingEvent) {
            throw new Error("Event introuvable");
        }

        const event = await updateEventAccessById(eventId);

        if (!event) {
            throw new Error("Erreur lors de la mise a jour de l'événement.");
        }
        
        return event;

    } catch (error) {
        throw error;   
    }
};