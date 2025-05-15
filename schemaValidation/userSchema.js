import Joi from "joi";

export const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Z]/).pattern(/[!+\-?*$^%/@_()#&~]/).pattern(/^\S*$/).min(8).max(20).required()
});

export const guestLoginSchema = Joi.object({
    guestpass: Joi.string().min(16).max(16).required()
});

export const userRegisterSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Z]/).pattern(/[!+\-?*$^%/@_()#&~]/).pattern(/^\S*$/).min(8).max(20).required(),
    firstname: Joi.string().min(1).max(30).required(),
    name: Joi.string().min(1).max(30).required()
});

export const resetPassword = Joi.object({
    password: Joi.string().pattern(/^[A-Z]/).pattern(/[!+\-?*$^%/@_()#&~]/).pattern(/^\S*$/).min(8).max(20).required(),
    confirmPassword: Joi.valid(Joi.ref('password')).required()
});