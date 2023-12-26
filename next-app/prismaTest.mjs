import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const terms = await prisma.termsSet.findUnique({
    where: {
      id: 1,
    },
  })
  

console.log(terms.terms);