// import { PrismaClient } from "@prisma/client";
import { ResponseMes, verificationAuthor } from "@/lib/Globalfunction";
// import prisma from "@/lib/Prisma";
import { NextResponse } from "next/server";


// const prisma = new PrismaClient();




export async function POST(req, res) {

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

    const reqData = await req.json(); 

    // Create the Receivedmoney entry first
    const newReceivedMoney = await prisma.receivedmoney.create({
      data: {
        clientid: parseInt(reqData.clientid),
        number: reqData.number || '',
        amount: parseFloat(reqData.amount),
        method: reqData.method,
        note: reqData.note || null,
      },
    });

    // Now create the history entry related to the new Receivedmoney record
    const newHistory = await prisma.history.create({
      data: {
        clientid: parseInt(reqData.clientid),
        amount: parseFloat(reqData.amount),
        note: reqData.note || null,
        status: 'Received', 
        number: reqData.number || '',
        method: reqData.method || '',
      },
    });


    return NextResponse.json({ status: "ok", data: newReceivedMoney }
    );

  } catch (error) {
    console.log("Error creating customer:", error.message);
    return NextResponse.json({
      status: 500,
      error: "Failed to create send Money!" + error.message,
    });
  }
}
