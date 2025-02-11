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


            // ----------------------------------- Test -------------------------------
            const todayStart = new Date();
            todayStart.setHours(0, 0, 0, 0)
            const todayEnd = new Date();
            todayEnd.setHours(23, 59, 59, 999);


            // Helper function to handle aggregate and return 0 if no data is found
            const getTotalAmount = async (model, whereConditions) => {
                const result = await prisma[model].aggregate({
                    _sum: { amount: true },
                    where: whereConditions
                });
                return result._sum.amount || 0;  // Return 0 if result is null or undefined
            }

            //  today total send 
            const todayTotalSend = await getTotalAmount('sendmoney',{
                createdAt: { gte: todayStart,lte: todayEnd}
            })
            

            //  today total Received 
            const todayTotalReceived = await getTotalAmount('receivedmoney',{
                createdAt: { gte: todayStart,lte: todayEnd}
            })


            //  today total bKash send amount 
            const todayTotalSendbkash = await getTotalAmount('history',{
                createdAt: { gte: todayStart,lte: todayEnd},method: 'b',status: 'Send'
            })

            //  today total Bank Received amount 
            const todayTotalReceivedbkash = await getTotalAmount('history',{
                createdAt: { gte: todayStart,lte: todayEnd},method: 'bank',status: 'Received'
            })

            //  today total Bank send amount 
            const todayTotalSendBank = await getTotalAmount('history',{
                createdAt: { gte: todayStart,lte: todayEnd},method: 'bank',status: 'Send'
            })

            //  today total Bank Received amount
            const todayTotalReceivedBank = await getTotalAmount('history',{
                createdAt: { gte: todayStart,lte: todayEnd},method: 'bank',status: 'Received'
            })


            //  today total Nagad Send amount 
            const todayTotalSendNagad = await getTotalAmount('history',{
                createdAt: { gte: todayStart,lte: todayEnd},method: 'n',status: 'Send'
            })

            //  today total Nagad Received amount
            const todayTotalReceivedNagad = await getTotalAmount('history',{
                createdAt: { gte: todayStart,lte: todayEnd},method: 'n',status: 'Received'
            })
            // ----------------------------------- Test -------------------------------
            

            // Set token in an HTTP-only cookie
            return ResponseMes(200, {
                message: "Login successful", data: token, dashboard: {
                    send: todayTotalSend,
                    received: todayTotalReceived,
                    sendBank: todayTotalSendBank,
                    receivedBank: todayTotalReceivedBank,
                    sendbKash: todayTotalSendbkash,
                    receivedbKash: todayTotalReceivedbkash,
                    sendNagad: todayTotalSendNagad,
                    receivedNagad: todayTotalReceivedNagad,
                }
            });
        }

    } catch (error) {
        console.log(error);
        return ResponseMes(500, 'An error occurred.', error.message);
    }
};