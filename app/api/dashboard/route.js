// import { PrismaClient } from "@prisma/client";
import { ResponseMes, verificationAuthor } from "@/lib/Globalfunction";
import prisma from "@/lib/Prisma";
import { NextResponse } from "next/server";


// const prisma = new PrismaClient();



export const GET = async (req) => {
    //    console.log('dashboard start')
    // ----------------------- Secure Request Without Bearer Token Start--------------------------
    const headersList = req.headers;
    const authHeader = headersList.get("authorization");

    try {
        const data = await verificationAuthor(authHeader);
        if (data === false) {
            return ResponseMes(401, "Unauthorized: Token mismatch or user not found")
        }
    } catch (error) {
        return ResponseMes(401, "Invalid Auth")
    }
    // ----------------------- Secure Request Without Bearer Token End --------------------------

    try {

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
        const todayTotalSend = await getTotalAmount('sendmoney', {
            createdAt: { gte: todayStart, lte: todayEnd }
        })


        //  today total Received 
        const todayTotalReceived = await getTotalAmount('receivedmoney', {
            createdAt: { gte: todayStart, lte: todayEnd }
        })


        //  today total bKash send amount 
        const todayTotalSendbkash = await getTotalAmount('history', {
            createdAt: { gte: todayStart, lte: todayEnd }, method: 'b', status: 'Send'
        })

        //  today total Bank Received amount 
        const todayTotalReceivedbkash = await getTotalAmount('history', {
            createdAt: { gte: todayStart, lte: todayEnd }, method: 'bank', status: 'Received'
        })

        //  today total Bank send amount 
        const todayTotalSendBank = await getTotalAmount('history', {
            createdAt: { gte: todayStart, lte: todayEnd }, method: 'bank', status: 'Send'
        })

        //  today total Bank Received amount
        const todayTotalReceivedBank = await getTotalAmount('history', {
            createdAt: { gte: todayStart, lte: todayEnd }, method: 'bank', status: 'Received'
        })


        //  today total Nagad Send amount 
        const todayTotalSendNagad = await getTotalAmount('history', {
            createdAt: { gte: todayStart, lte: todayEnd }, method: 'n', status: 'Send'
        })

        //  today total Nagad Received amount
        const todayTotalReceivedNagad = await getTotalAmount('history', {
            createdAt: { gte: todayStart, lte: todayEnd }, method: 'n', status: 'Received'
        })
        // ----------------------------------- Test -------------------------------

        return NextResponse.json({
            status: 'ok', data: {
                send: todayTotalSend,
                received: todayTotalReceived,
                sendBank: todayTotalSendBank,
                receivedBank: todayTotalReceivedBank,
                sendbKash: todayTotalSendbkash,
                receivedbKash: todayTotalReceivedbkash,
                sendNagad: todayTotalSendNagad,
                receivedNagad: todayTotalReceivedNagad,
            }
        })
    } catch (error) {
        console.log("Error fetching History:", error.message);
        return NextResponse.json({
            status: 500,
            error: "Failed to fetch Dashboard data!",
        });
    }
}