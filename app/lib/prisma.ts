// lib/prisma.js (or utils/prisma.js)
import { PrismaClient } from "@prisma/client";

// Declare a global variable for PrismaClient to avoid multiple instances in development
// This is a common pattern to prevent hot-reloading issues where new PrismaClient instances
// might be created on every reload, leading to too many connections.
let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // In development, store the PrismaClient instance on the global object
  // to reuse it across hot-reloads
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
