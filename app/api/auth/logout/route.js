import { NextResponse } from 'next/server';

export const POST = async () => {
    const response = NextResponse.json({ message: 'Logged out successfully' });

    // Remove the cookie
    response.cookies.set('accessToken', '', {
        httpOnly: true,
        expires: new Date(0), // Immediately expire the cookie
    });

    return response;
};