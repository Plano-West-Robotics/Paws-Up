import React from 'react';
import TermDisplay from '@/app/components/TermDisplay/TermDisplay';
import prisma from '@/lib/prisma.mjs';

async function getTermsList(setId){
  let termset = await prisma.termsSet.findUnique({
    where: {
      id: parseInt(setId),
    },
  })
    prisma.$disconnect();
  return termset;
}

function shuffle(list) {
  let shuffleList = list.sort(()=> Math.random() - 0.5)
  return shuffleList
}

export default async function GamePage({ params: { setId } }) {
  let termsSet = await getTermsList(setId)
  let termsList = termsSet.terms
  let shuffledTermsList = shuffle(termsList)

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      ></link>

      <div className="flex flex-col h-screen w-screen">
        <div className="bg-slate-50 h-20"></div>
        <div className="flex flex-row w-screen h-full">
          <div className="bg-green-400 hover:bg-green-500 w-1/2 h-full greenDiv"></div>
          <div className="bg-red-400 hover:bg-red-500 w-1/2 h-full redDiv"></div>
        </div>
      </div>
      <TermDisplay finalTermsList={shuffledTermsList} />
    </>
  );
};


