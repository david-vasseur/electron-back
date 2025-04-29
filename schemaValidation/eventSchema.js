import Joi from "joi";

export const newEventSchema = Joi.object({
    name: Joi.string().max(20).required()
})