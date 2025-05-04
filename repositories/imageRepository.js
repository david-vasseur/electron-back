import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/// Repository pour obtenir toutes les images d'un event ///

export const getImagesByEvent = async (eventId) => {
    const images = await prisma.image.findMany({
        where: { event_id: parseInt(eventId) },
    })
    return images;
}

/// Repository pour ajouter une image en bdd avec ses tags ///

export const insertImage = async (name, eventId, tags) => {
    return await prisma.image.create({
        data: {
            name,
            event_id: parseInt(eventId),
            image_tag: {
                create: JSON.parse(tags).map(tagName => ({
                    tag: {
                        connectOrCreate: {
                            where: { name: tagName },
                            create: { name: tagName },
                        }
                    }
                }))
            }
        }
    })
}

/// Repository pour effacer une image en bdd ///

export const deleteImageByFilename = async (imageId) => {

    return await prisma.$transaction( async (tx) => {
        const tags = await tx.image_tag.findMany({
            where: { image_id: imageId },
            select: { tag_id: true }
        });

        const tagsId = tags.map(t => t.tag_id);

        await tx.tag.deleteMany({
            where: { id: { in: tagsId } }
        });

        await tx.image_tag.deleteMany({
            where: { image_id: imageId }
        });

        return await prisma.image.delete({
            where: { id: imageId }
        });
    })
};
