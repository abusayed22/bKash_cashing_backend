import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'; // For password hashing verification
import { SignJWT } from "jose";
import { CreateToken } from "@/lib/tokenHelper";
import { cookies } from "next/headers";
import { hashPassword } from "@/lib/passwordHandler";


const prisma = new PrismaClient();

//secrec key
const JWT_SECRET = 'apps-key-bkash';


export const POST = async (req) => {
    try {
        const { email, password } = await req.json();

        const existingUser = await prisma.admin.findUnique({
            where: { email:email },
        });
        

        if (!existingUser) {
            return NextResponse.json({ error: 'User does not exist.' }, { status: 404 });
        }


        // create token
        const token = await CreateToken(existingUser['email'], existingUser['id']);
        const expirationTime = new Date(Date.now() + 60 * 60 * 1000) // expiretion time 
        const cookieString = `token=${token};expires=${expirationTime.toUTCString()};path=/`;

        // if("$2a$10$uVlir4YLj47uLt4kWKG9vOPNMnpP0bfQUCCHQRr6NulrdA5oMySr6" === "$2a$10$uVlir4YLj47uLt4kWKG9vOPNMnpP0bfQUCCHQRr6NulrdA5oMySr6"){
        //     console.log('correct')
        // }

        // match password
        // Compare the entered password with the hashed password
        const isMatch = await bcrypt.compare(password, existingUser.password);
        console.log(isMatch)
        if(!isMatch){
            return NextResponse.json({ error: 'Password incorrect'});
        }



        // update token on database 
        const dataCreate = await prisma.admin.update({
            where: {
                id: parseInt(existingUser.id),
                email: existingUser.email,
                // password: password
            },
            data: {
                token: token,
            }
        })


        // Set token in an HTTP-only cookie
        return NextResponse.json({ status: "Login successful", data: token });
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ error: 'An error occurred.' }, { status: 500 });
    }
};