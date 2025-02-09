import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export const middleware = async(NextRequest) => {
    

    // const headersList = await headers()
    // const userAgent = headersList.get('authorization')
    // const authToken = (userAgent || '').split("Bearer").at(1);
    // console.log('auth',authToken)
    
    // const ownToken = NextRequest.cookies.get("authToken");
    // console.log('ownToken ',ownToken)
}




