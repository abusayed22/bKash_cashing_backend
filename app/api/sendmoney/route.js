import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();



export async function GET() {
  return new NextResponse(JSON.stringify({ "hello": "ok" }), {
    status: 200,
  });
}

export async function POST(req, res) {
  try {

    const reqData = await req.json(); // Parse the incoming request JSON data

    const newSend = await prisma.sendmoney.create({
      data: {
        clientid: parseInt(reqData.clientid),
        number: reqData.number,
        amount: parseFloat(reqData.amount),
        method: reqData.method,
        note: reqData.note || null
      },
    });

    // Now create the history entry related to the new Receivedmoney record
    const newHistory = await prisma.history.create({
      data: {
        clientid: parseInt(reqData.clientid),
        amount: parseFloat(reqData.amount),
        note: reqData.note || null,
        status: 'Send', // You can customize the status (e.g., "Received" or "Completed")
        number: reqData.number || '', // Add the number if available
        method: reqData.method || '',
      },
    });

    return NextResponse.json({ status: "ok", data: newSend });

  } catch (error) {
    console.log("Error creating customer:", error.message);
    return NextResponse.json({
      status: 500,
      error: "Failed to create send Money!" + error.message,
    });
  }
}

