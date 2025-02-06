// import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/Prisma";
import { NextResponse } from "next/server";


// const prisma = new PrismaClient();



export async function GET(req, res) {
    try {
        const url = new URL(req.url);
        const type = url.searchParams.get('type');
        const page = parseInt(url.searchParams.get("page") || "1"); // Default to page 1 if not provided
        const limit = parseInt(url.searchParams.get("limit") || "10");

        // Calculate offset (skip)
        const skip = (page - 1) * limit;
        const transactionHistories = await prisma.history.findMany({
            // where:{
            //     NOT: {
            //         clientid:null
            //     }
            // },
            skip: skip,
            take: limit,
            include: {
                client: {
                    select: {
                        id: true,
                        fullname: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Optionally, get the total count of clients to calculate total pages
        const totalHistory = await prisma.history.count({
            // where: {
            //   NOT: {
            //     clientid: null,
            //   },
            // },

        });

        const totalPages = Math.ceil(totalHistory / limit);

        return NextResponse.json({
            status: "ok", data: transactionHistories, pagination: {
                // totalClients,
                totalPages,
                currentPage: page,
                limit,
            },
        });
    } catch (error) {
        console.log("Error fetching History:", error.message);
        return NextResponse.json({
            status: 500,
            error: "Failed to fetch History!",
        });
    }
}