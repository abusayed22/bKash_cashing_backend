import { hashPassword } from "@/lib/passwordHandler";
import { EncodedPassword } from "@/lib/tokenHelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();




export const POST = async (req,res) => {
    try {
        let dataObj = await req.json();
        dataObj['otp'] = 0;

        // check user exist
        const existingUser = await prisma.admin.findUnique({
            where: {
                email: dataObj.email,
            }
        });
        // console.log(existingUser)

        if (existingUser) {
            // console.log('User already exists, please login!')
            return NextResponse.json({ Error: 'User already exists, please login!' }, { status: 400 });
        }

        // password encoded
        const hashedPassword = await hashPassword(dataObj.password);
        console.log(hashedPassword);

        if(!hashedPassword) {
            return NextResponse.json({ Error: 'Password Hashed error' }, { status: 400 });
        }

         
        // Create a new user in the database
        const newUser = await prisma.admin.create({
            data: {
                fullname: dataObj.fullName,
                email: dataObj.email,
                password: hashedPassword, 
                otp: '0',
                token: ''
            },
            select:{
                fullname:true,
                email:true,
                password:true
            }
        });
                

        return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
    } catch (error) {
        // Handle unexpected errors
        console.error(error);
        return NextResponse.json({ Error: 'Something went wrong. Please try again later.' }, { status: 500 });
    }
}