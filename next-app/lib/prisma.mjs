// prismaClient.mjs
import { PrismaClient } from '@prisma/client';
// @ts-check

/** @type {import('@prisma/client').PrismaClient} */
let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}

export default prisma;
