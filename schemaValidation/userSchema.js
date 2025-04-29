import Joi from "joi";

export const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

export const guestLoginSchema = Joi.object({
    guestpass: Joi.string().min(12).max(12).required()
});

export const userRegisterSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    firstname: Joi.string().min(1).max(30).required(),
    name: Joi.string().min(1).max(30).required()
})