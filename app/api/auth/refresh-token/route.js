import { NextResponse } from 'next/server';
import { jwtVerify, sign } from 'jose'; // Verifying JWT and signing a new one
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = 'apps-key-bkash'; 
const JWT_REFRESH_SECRET = 'apps-key-bkash-ref'; 

const ACCESS_TOKEN_EXPIRY = '1h'; // New access token expiry (1 hour)

export const POST = async (req) => {
  try {
    // Get the refresh token from the request (cookie or body)
    const refreshToken = req.cookies.get('refreshToken'); // Assuming you're storing it in cookies

    if (!refreshToken) {
      return NextResponse.json({ error: 'Refresh token is missing' }, { status: 400 });
    }

    // Verify the refresh token
    const { payload } = await jwtVerify(refreshToken, JWT_REFRESH_SECRET);

    // Check if the user exists
    const existingUser = await prisma.admin.findUnique({
      where: { email: payload.email },
    });

    if (!existingUser) {
      return NextResponse.json({ error: 'Invalid refresh token or user does not exist' }, { status: 401 });
    }

    // Generate a new access token
    const newAccessToken = sign(
      { id: existingUser.id, email: existingUser.email, fullname: existingUser.fullname },
      JWT_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRY }
    );

    return NextResponse.json({
      message: 'Access token refreshed successfully',
      accessToken: newAccessToken,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to refresh access token' }, { status: 500 });
  }
};