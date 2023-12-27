import prisma from '@/lib/prisma.mjs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request, { params: { setId } }) {

  try {
    const term = await prisma.termsSet.findUnique({
      where: {
        id: parseInt(setId),
      },
    });

    if (term) {
      return NextResponse.json({ terms: term.terms });
    } else {
      return NextResponse.json({ error: 'Term not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching terms:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
