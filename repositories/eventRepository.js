import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/// Creation d'un event ///

export const createEvent = async (userId, name) => {
    return await prisma.event.create({
        data: {
            name,
            user_id: userId,
            public: true
        }
    })
}

/// Delete d'un event avec toutes ses dependances ///

export const deleteEventById = async (eventId) => {
    try {
        const eventExists = await prisma.event.findUnique({
            where: { id: eventId }
        });

        if (!eventExists) {
            throw new Error("Événement non trouvé");
        }

        await prisma.$transaction(async (tx) => {
       
        const images = await tx.image.findMany({
          where: { event_id: eventId },
          select: { id: true },
        });
  
        const imageIds = images.map(img => img.id);
  
        
        await tx.image_tag.deleteMany({
          where: { image_id: { in: imageIds } },
        });
  
        
        await tx.image.deleteMany({
          where: { id: { in: imageIds } },
        });
  
        
        await tx.event.delete({
          where: { id: eventId },
        });
  
      });
  
      return { message: "Événement supprimé avec succès avec ses dépendances." };
    } catch (error) {
      console.error("Erreur lors de la suppression en cascade :", error);
      return { error: "Erreur lors de la suppression de l'événement." };
    }
  };

    export const getOneEvent = async (eventId) => {

        const parsedEventId = parseInt(eventId);

        if (isNaN(parsedEventId)) {
            return { message: "format non valide" }
        }

        const event =  await prisma.event.findUnique({
            where: { id: parsedEventId }
        })

        if (!event) {
            return { message: "Event introuvable" };
        }

        return event;
    };

    export const getAllEventByUserId = async (userId) => {

        const parsedUserId = parseInt(userId);

        if (isNaN(parsedUserId)) {
            return { message: "format non valide" }
        }  

        const events = await prisma.event.findMany({
            where: {
                user_id: parsedUserId
            }
        })

        try {
            
        } catch (error) {
            
        }

    }

    export const updateEventNameById = async (eventId, newName) => {

        const parsedEventId = parseInt(eventId);

        if (isNaN(parsedEventId) || typeof(newName) !== 'string' || newName.length < 1) {
            return { message: "format non valide" }
        }

        return await prisma.event.update({
            where: { 
                id: parsedEventId 
            },
            data: {
                name: newName,
            }
        })
    };