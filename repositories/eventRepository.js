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
    });
};

/// Delete d'un event avec toutes ses dependances ///

export const deleteEventById = async (eventId) => {

    return await prisma.$transaction(async (tx) => {
    
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

        return await tx.event.delete({
            where: { id: eventId },
        });
    });
};

/// Obtenir les données d'un event ///

export const getOneEvent = async (eventId) => {

    return await prisma.event.findUnique({
        where: { id: eventId }
    });
};

/// Mettre a jour le nom de l'event ///

export const updateEventNameById = async (eventId, newName) => {

    return await prisma.event.update({
        where: { id: eventId },
        data: {
            name: newName,
        }
    });
};

/// Mettre a jour l'acces public/private de l'event /// 

export const updateEventAccessById = async (eventId) => {

    const event = await prisma.event.findUnique({
        where: { id: eventId },
        select: {
            public: true
        }
    });

    return await prisma.event.update({
        where: { id: eventId },
        data: {
            public: !event.public,
        }
    });
};

/// Obtenir tous les event de l'utilisateur ///

export const getAllEventByUserId = async (userId) => {

    return await prisma.event.findMany({
        where: {
            user_id: userId
        }
    });
};

    