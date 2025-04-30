import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const prisma = new PrismaClient();

/// Creation de compte ///

export const createUser = async (email, password, firstname, name) => {

    const hashedPassword = await bcrypt.hash(password, 10);
    let guestpass;
    let hmac;
    let exists = true;
    let exist = true;

    while (exists) {
        guestpass = crypto.randomBytes(8).toString('hex');
        
        exists = await prisma.user.findFirst({
            where: { guestpass }
        });
    }

    while (exist) {
        hmac = crypto.randomBytes(8).toString('hex');
        exist = await prisma.user.findFirst({
            where: { hmac }
        })
    }

    return await prisma.user.create({ 
        data: {
            firstname,
            name,
            email,
            password: hashedPassword,
            guestpass,
            isverified: false,
            hmac,
        } 
    });
};

/// Recherche d'un utilisateur par email ///

export const searchUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({
        where: { email },
        select: {
            id: true,
            name: true,
            password: true,
            isverified: true
        }
    })
    return user;
};

/// Recherche d'un utilisateur par GuestPass ///

export const searchUserByGuestpass = async (guestpass) => {
    const user = await prisma.user.findFirst({
        where: { guestpass },
        select: {
            id: true,
            name: true,
            guestpass: true
        }
    })
    return user;
};

/// Recuperer les infos de l'utilisateur par rapport au guestPass ///

export const getGuestUser = async (guestpass) => {
    const user = await prisma.user.findFirst({
        where: { guestpass },
        select: {
            id: true,
            firstname: true,
            name: true,
            guestpass: true,
            events: {
                where: { public: true },
                select: {
                    id: true,
                    name:true,
                    public: true
                }
            } 
        }
    })
    return user;
};

/// Recuperer toutes les infos de l'utilisateur ///

export const getUserById = async (id) => {
    const user = await prisma.user.findUnique({ 
        where: { id },
        select: {
            id: true,
            email: true,
            firstname: true,
            name: true,
            guestpass: true,
            events: {
                select: {
                    id: true,
                    name:true,
                    public: true
                }
            } 
        }
    });
    return user;
};

/// Fonction de verification email ///

export const verifiedUser = async (email) => {
    return await prisma.user.update({
        where: { email },
        data: {
            isverified: true
        }
    })
};



