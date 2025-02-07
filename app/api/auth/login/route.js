import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'; // For password hashing verification
import { jwtVerify, sign } from 'jose'; // For JWT creation


const prisma = new PrismaClient();

//secrec key
const JWT_SECRET = 'apps-key-bkash';

// export const POST = async (req,res) => {
//     try {
//         const {email,passwrod} = await req.json();

//         // existing user
//         const existingUser = await prisma.admin.findUnique({
//             where: {
//                 email:email
//             }
//         });

//         if(!existingUser) {
//             return NextResponse.json({error: 'User dose Not Exist!. Please register first!'},{status:404})
//         }

//         const passwordMatch = await bcrypt.compare(passwrod,existingUser.password);

//         if(!passwordMatch){
//             return NextResponse.json({error:'Invalid credentials. Please check your Password'},{status:401})
//         };

//         // if authentication is successful,create a JWT token
//         const payload = {
//             id:existingUser.id,
//             fullname:existingUser.fullname,
//             email: existingUser.email
//         };

//         // Create a JWT token
//         const token = sign(payload,JWT_SECRET,{expiresIn: '1h'});

//         // send response with the th JWT token
//         return NextResponse.json({
//             message: 'Login Successfully',
//             token:token,
//             user: {id:existingUser.id,fullname:existingUser.fullname,email:existingUser.email},
//         },{status:200})
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json(
//           { error: 'An error occurred. Please try again later.' },
//           { status: 500 }
//         );
//     }
// }

export const POST = async (req) => {
    try {
      const { email, password } = await req.json();
  
      const existingUser = await prisma.admin.findUnique({
        where: { email },
      });
  
      if (!existingUser) {
        return NextResponse.json({ error: 'User does not exist.' }, { status: 404 });
      }
  
      const passwordMatch = await bcrypt.compare(password, existingUser.password);
      if (!passwordMatch) {
        return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
      }
  
      // Generate JWT
      const payload = { id: existingUser.id, email: existingUser.email };
      const token = await sign(payload, new TextEncoder().encode(JWT_SECRET), { expiresIn: '1h' });
  
      // Store token in an httpOnly cookie (More secure than localStorage)
      const response = NextResponse.json({ message: 'Login successful' });
      response.cookies.set('accessToken', token, {
        httpOnly: true,
        secure: 'production', 
        sameSite: 'Strict',
        maxAge: 60 * 60, // 1 hour
      });
  
      return response;
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'An error occurred.' }, { status: 500 });
    }
  };