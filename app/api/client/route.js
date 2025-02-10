// import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from '../prisma/generated/clientPg'
// import { PrismaClient } from '../prisma/generated/clientPg';
// import prisma from "@/lib/Prisma";
import { ResponseMes, verificationAuthor } from "@/lib/Globalfunction";
import { TokenDecoded } from "@/lib/tokenHelper";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

// Client Add
export async function POST(req, res) {
  const reqData = await req.json();

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
    const newCustomer = await prisma.client.create({
      data: {
        fullname: reqData.name,
        number: reqData.number,
        address: reqData.address,
      },
    });
    return NextResponse.json({ status: "ok", data: newCustomer });
  } catch (error) {
    return ResponseMes(400, "Error creating Client, something wroing error!")
  }
}




// All Client Get
export async function GET(req, res) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "10");

  // ----------------------- Secure Request Without Bearer Token Start --------------------------
  const headersList = req.headers;
  const authHeader = headersList.get("authorization");

  try {
    const data = await verificationAuthor(authHeader);
    if (data === false) {
      return ResponseMes(401, "Unauthorized: Token mismatch or user not found")
    } else {
      try {
        // Calculate offset (skip)
        const skip = (page - 1) * limit;

        // Fetch client data
        const clientsData = await prisma.client.findMany({
          where: {
            NOT: {
              fullname: null,
            },
          },
          skip: skip,
          take: limit,
          orderBy: {
            createdAt: 'desc',
          },
        });

        // Optionally, get the total count of clients to calculate total pages
        const totalClients = clientsData.length;
        const totalPages = Math.ceil(totalClients / limit); // Calculate total pages

        return NextResponse.json({
          status: "ok",
          data: clientsData,
          pagination: {
            totalClients,
            totalPages,
            currentPage: page,
            limit,
          },
        });
      } catch (error) {
        return NextResponse.json({
          status: 500,
          error: "Failed to fetch clients. Internal server error.",
        });
      }
    }
  } catch (error) {
    return ResponseMes(401, "Invalid Auth")
  }
}



// All Client Get With full-name,id
export async function PATCH(req, res) {

  // ----------------------- Secure Request Without Bearer Token Start--------------------------
  const headersList = req.headers;
  const authHeader = headersList.get("authorization");

  try {
    const data = await verificationAuthor(authHeader);
    if (data === false) {
      return ResponseMes(401, "Unauthorized: Token mismatch or user not found")
    }
  } catch (error) {
    return ResponseMes(401, "Unauthorized: Invalid Auth")
  }
  // ----------------------- Secure Request Without Bearer Token End --------------------------

  try {
    const clientData = await prisma.client.findMany({
      select: {
        id: true,
        fullname: true,
      },
      where: {
        NOT: { fullname: null }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Adding CORS headers to the response
    return NextResponse.json(
      { status: "ok", data: clientData }
    );
  } catch (error) {
    console.log("Error fetching clients:", error.message);
    return NextResponse.json({
      status: 500,
      error: "Failed to fetch clients!",
    });
  }
}


