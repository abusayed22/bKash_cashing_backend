import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'; // For password hashing verification 
import { CreateToken } from "@/lib/tokenHelper";
import { ResponseMes } from "@/lib/Globalfunction";


const prisma = new PrismaClient();

//secrec key
const JWT_SECRET = 'apps-key-bkash';


export const POST = async (req) => {
    try {
        const { email, password } = await req.json();

        const existingUser = await prisma.admin.findUnique({
            where: { email: email },
        });


        if (!existingUser) {
            return ResponseMes(404, 'User does not exist.');
        }


        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return ResponseMes(401, 'Password incorrect');
        } else {
            const token = await CreateToken(existingUser['email'], existingUser['id']);
            // update token on database 
            const dataCreate = await prisma.admin.update({
                where: {
                    id: parseInt(existingUser.id),
                    email: existingUser.email,
                },
                data: {
                    token: token,
                }
            })

            // Set token in an HTTP-only cookie
            return ResponseMes(200, { message: "Login successful", data: token });
        }

    } catch (error) {
        console.log(error);
        return ResponseMes(500, 'An error occurred.', error.message);
    }
};