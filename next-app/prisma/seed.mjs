import { PrismaClient } from '@prisma/client';
import { termsSets } from './test_data.mjs';

const prisma = new PrismaClient();

async function main() {
    for (let termsSet of termsSets) {
        await prisma.termsSet.create({
            data:termsSet
        })
    }
    
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})



