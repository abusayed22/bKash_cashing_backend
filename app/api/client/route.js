// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from '../prisma/generated/clientPg'
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

// client add
export async function POST(req, res) {

  try {
    const reqData = await req.json(); // Parse the incoming request JSON data

    const newCustomer = await prisma.client.create({
      data: {
        fullname: reqData.name,
        number: reqData.number,
        address: reqData.address,
      },
    });

    return NextResponse.json({ status: "ok", data: newCustomer });

  } catch (error) {
    console.log("Error creating customer:", error.message);
    return NextResponse.json({
      status: 500,
      error: "Failed to create customer!",
    });
  }
}


// all client get
export async function GET(req, res) {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1"); // Default to page 1 if not provided
    const limit = parseInt(url.searchParams.get("limit") || "10"); // Default to 10 items per page if not provided

    // Calculate offset (skip)
    const skip = (page - 1) * limit;

    const clientsData = await prisma.client.findMany({
      where: {
        NOT: {
          fullname: null
        }
      },
      skip: skip, // Skip records based on current page
      take: limit, // Limit the number of records per page
      orderBy:{
        createdAt: 'desc'
      }
    });

    // Optionally, get the total count of clients to calculate total pages
    const totalClients = await prisma.client.count({
      where: {
        NOT: {
          fullname: null,
        },
      },
    });


    const totalPages = Math.ceil(totalClients / limit); // Calculate total pages


    return NextResponse.json({
      status: "ok", data: clientsData, pagination: {
        totalClients,
        totalPages,
        currentPage: page,
        limit,
      },
    });
  } catch (error) {
    console.log("Error creating customer:", error.message);
    return NextResponse.json({
      status: 500,
      error: "Failed to create customer!",
    });
  }
}


// all client get with full-name,id
export async function PATCH(req, res) {
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


