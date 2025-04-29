import { createEvent } from "../repositories/eventRepository.js";
import { getUserById } from "../repositories/userRepository.js";

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