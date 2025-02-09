
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient()

export const POST = async (req) => {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');
        const email = url.searchParams.get('email');


        // Check if id and email are valid before attempting the update
        if (!id || !email) {
            return NextResponse.json({ error: "Missing id or email" });
        }

        // Update token to empty
        const updatedAdmin = await prisma.admin.update({
            where: {
                id: parseInt(id),
                email: email
            },
            data: {
                token: ''
            }
        });


        let response = NextResponse.json({ message: 'Logged out successfully', data: updatedAdmin });

        // Remove the cookie
        response.cookies.set('accessToken', '', {
            httpOnly: true,
            expires: new Date(0), // Immediately expire the cookie
        });

        return response;
    } catch (error) {
        console.error("Error updating admin:", error);  // Log detailed error
        return NextResponse.json({ error: error.message });
    }
};

// export const POST = async (req) => {
//     try {
//         const url = new URL(req.url);
//         const id = url.searchParams.get('id');
//         const email = url.searchParams.get('email');

//         //  update token empty 
//         const updatedAdmin = await prisma.admin.update({
//             where: {
//                 id: id,
//                 email: email
//             },
//             data: {
//                 token: ''
//             }
//         })
//         console.log("Updated Admin:", updatedAdmin);  // Debugging log
//         let response = NextResponse.json({ message: 'Logged out successfully',data:updatedAdmin });

//         // Remove the cookie
//         response.cookies.set('accessToken', '', {
//             httpOnly: true,
//             expires: new Date(0), // Immediately expire the cookie
//         });

//         return response;
//     } catch (error) {
//         return NextResponse.json({ error: error.message })
//     }
// };