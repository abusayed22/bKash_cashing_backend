// import { PrismaClient } from "@prisma/client";
import { ResponseMes, verificationAuthor } from "@/lib/Globalfunction";
import prisma from "@/lib/Prisma";
import { NextResponse } from "next/server";


// const prisma = new PrismaClient();



export const GET = async (req) => {
   console.log('dashboard start')
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
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0)
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999)

        //  today total send 
        const todayTotalSend = await prisma.sendmoney.aggregate({
            _sum: {
                amount: true
            },
            where: {
                createdAt: {
                    gte: todayStart,
                    lte: todayEnd
                }
            }
        })
        const todayTotalSendAmount = todayTotalSend._sum.amount;

        //  today total Received 
        const todayTotalReceived = await prisma.receivedmoney.aggregate({
            _sum: {
                amount: true
            },
            where: {
                createdAt: {
                    gte: todayStart,
                    lte: todayEnd
                }
            }
        })
        const todayTotalReceivedAmount = todayTotalReceived._sum.amount;


        //  today total bKash send amount 
        const todayTotalSendbkash = await prisma.history.aggregate({
            _sum: {
                amount: true
            },
            where: {
                createdAt: {
                    gte: todayStart,
                    lte: todayEnd
                },
                method: 'b',
                status: 'Send'
            }
        })
        const todayTotalSendbKashAmount = todayTotalSendbkash._sum.amount;

        //  today total Bank Received amount 
        const todayTotalReceivedbkash = await prisma.history.aggregate({
            _sum: {
                amount: true
            },
            where: {
                createdAt: {
                    gte: todayStart,
                    lte: todayEnd
                },
                method: 'bank',
                status: 'Received'
            }
        })
        const todayTotalReceivedbKashAmount = todayTotalReceivedbkash._sum.amount;
        
        //  today total Bank send amount 
        const todayTotalSendBank = await prisma.history.aggregate({
            _sum: {
                amount: true
            },
            where: {
                createdAt: {
                    gte: todayStart,
                    lte: todayEnd
                },
                method: 'bank',
                status: 'Send'
            }
        })
        const todayTotalSendBankAmount = todayTotalSendBank._sum.amount;

        //  today total Bank Received amount 
        const todayTotalReceivedBank = await prisma.history.aggregate({
            _sum: {
                amount: true
            },
            where: {
                createdAt: {
                    gte: todayStart,
                    lte: todayEnd
                },
                method: 'bank',
                status: 'Received'
            }
        })
        const todayTotalReceivedBankAmount = todayTotalReceivedBank._sum.amount;


        //  today total Nagad Send amount 
        const todayTotalSendNagad = await prisma.history.aggregate({
            _sum: {
                amount: true
            },
            where: {
                createdAt: {
                    gte: todayStart,
                    lte: todayEnd
                },
                method: 'n',
                status: 'Send'
            }
        })
        const todayTotalSendNagadAmount = todayTotalSendNagad._sum.amount;
        
        //  today total Nagad Received amount 
        const todayTotalReceivedNagad = await prisma.history.aggregate({
            _sum: {
                amount: true
            },
            where: {
                createdAt: {
                    gte: todayStart,
                    lte: todayEnd
                },
                method: 'n',
                status: 'Received'
            }
        })
        const todayTotalReceivedNagadAmount = todayTotalReceivedNagad._sum.amount;

        return NextResponse.json({
            status: 'ok', data: {
                send: todayTotalSendAmount,
                received: todayTotalReceivedAmount,
                sendBank: todayTotalSendBankAmount,
                receivedBank: todayTotalReceivedBankAmount,
                sendbKash: todayTotalSendbKashAmount,
                receivedbKash: todayTotalReceivedbKashAmount,
                sendNagad: todayTotalSendNagadAmount,
                receivedNagad: todayTotalReceivedNagadAmount,
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