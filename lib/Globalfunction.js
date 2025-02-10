import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const { TokenDecoded } = require("./tokenHelper")

const prisma = new PrismaClient();


// Error Response message
export function ResponseMes(statusCode, StatusMessage) {

    if(isJSONObject(StatusMessage)){
        
        StatusMessage.status = statusCode;
          
        return NextResponse.json(StatusMessage,
            { status: statusCode }
        );
    }else{
        return NextResponse.json(
            { status: statusCode, error: StatusMessage },
            { status: statusCode }
        );
    }


   
}


export function isJSONObject(obj) {
    return obj !== null
        &&
        typeof obj === 'object'
        &&
        obj.constructor === Object;
}


// verification author with token
export const verificationAuthor = async (authHeader) => {

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return false;
    }

    const authToken = authHeader.split("Bearer ")[1].trim();
    
    let decodedToken;
    try {
        // Decode token
        decodedToken = await TokenDecoded(authToken);
        const { id, email } = decodedToken;
        

        const authData = await prisma.admin.findUnique({
            where: {
                id: id,
                email: email,
            },
            select: {
                token: true,
            },
        });


        if (!authData || authData.token !== authToken) {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}