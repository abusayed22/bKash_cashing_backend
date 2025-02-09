import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'; // For password hashing verification
import { SignJWT } from "jose";
import { CreateToken } from "@/lib/tokenHelper";
import { cookies } from "next/headers";


const prisma = new PrismaClient();

//secrec key
const JWT_SECRET = 'apps-key-bkash';


export const POST = async (req) => {
    try {
        const { email, password } = await req.json();

        const existingUser = await prisma.admin.findUnique({
            where: { email },
        });

        if (!existingUser) {
            return NextResponse.json({ error: 'User does not exist.' }, { status: 404 });
        }


        // create token
        const token = await CreateToken(existingUser['email'], existingUser['id']);
        // expiretion time 
        const expirationTime = new Date(Date.now() + 60 * 60 * 1000)
        const cookieString = `token=${token};expires=${expirationTime.toUTCString()};path=/`;

        // update token on database 
        await prisma.admin.update({
            where: {
                id: parseInt(existingUser.id),
                email: existingUser.email
            },
            data: {
                token: token,
            }
        })


        // Set token in an HTTP-only cookie
        return NextResponse.json({ status: "Login successful", data: token });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred.' }, { status: 500 });
    }
};