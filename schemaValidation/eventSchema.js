import Joi from "joi";

export const newEventSchema = Joi.object({
    name: Joi.string().max(20).required()
});

export const deleteEventSchema = Joi.object({
    eventId: Joi.number().integer().required()
});

export const updateNameSchema = Joi.object({
    newName: Joi.string().max(20).required(),
    eventId: Joi.number().integer().required()
});
