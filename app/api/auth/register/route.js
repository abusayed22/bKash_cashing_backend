import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();




export const POST = async (req,res) => {
    try {
        let dataObj = await req.json();
        dataObj['otp'] = 0;
        console.log(dataObj)

        // check user exist
        const existingUser = await prisma.admin.findUnique({
            where: {
                email: dataObj.email,
            }
        });

        if (existingUser) {
            return NextResponse.json({ Error: 'User already exists, please login' }, { status: 400 });
        }



         
        // Create a new user in the database
        const newUser = await prisma.admin.create({
            data: {
                fullname: dataObj.fullName,
                email: dataObj.email,
                password: dataObj.password, 
                otp: '0',
                token: ''
            },
        });
                

        return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
    } catch (error) {
        // Handle unexpected errors
        console.error(error);
        return NextResponse.json({ Error: 'Something went wrong. Please try again later.' }, { status: 500 });
    }
}