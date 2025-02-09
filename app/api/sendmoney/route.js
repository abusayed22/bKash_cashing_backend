// import { PrismaClient } from "@prisma/client";
import { ResponseMes, verificationAuthor } from "@/lib/Globalfunction";
// import prisma from "@/lib/Prisma";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();



export async function GET() {
  return new NextResponse(JSON.stringify({ "hello": "ok" }), {
    status: 200,
  });
}

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
    const reqData = await req.json(); // Parse the incoming request JSON data

    // Use a transaction to ensure both operations succeed or fail together
    const [newSend, newHistory] = await prisma.$transaction([
      prisma.sendmoney.create({
        data: {
          clientid: parseInt(reqData.clientid),
          number:reqData.number || '', 
          amount: parseFloat(reqData.amount),
          method: reqData.method,
          note: reqData.note || null,
        },
      }),
      prisma.history.create({
        data: {
          clientid: parseInt(reqData.clientid),
          amount: parseFloat(reqData.amount),
          note: reqData.note || null,
          status: 'Send', // Customize the status
          number: reqData.number || '', // Add the number if available
          method: reqData.method || '',
        },
      }),
    ]);

    

    return NextResponse.json({ status: "ok", data: newSend });

  } catch (error) {
    console.log("Error creating customer:", error.message);
    return NextResponse.json({
      status: 500,
      error: "Failed to create send Money!" + error.message,
    });
  }
}

