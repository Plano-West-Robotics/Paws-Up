// pages/api/getTerms.js
import prisma from '@/lib/prisma.mjs';
import { NextResponse } from "next/server";


export async function GET(request) {
  try {
    const term = await prisma.termsSet.findUnique({
      where: {
        id: 1,
      },
    });

    if (term) {
      return NextResponse.json({ terms: term.terms });
    } else {
      return NextResponse.json({ error: "Term not found" });
    }
  } catch (error) {
    console.error('Error fetching terms:', error);
    return NextResponse.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
