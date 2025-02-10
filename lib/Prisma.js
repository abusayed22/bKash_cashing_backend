import { PrismaClient } from '@prisma/client';

// Create the Prisma client instance once and reuse it in development
let prisma;
console.log(process.env.NODE_ENV)

if (typeof window === 'undefined') {  // Check if we are on the server side
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
  } else {
    // In development, use a global Prisma instance to prevent multiple instances during hot reloads
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
}

export default prisma;