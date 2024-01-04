"use client";
import React from 'react';
import TermDisplay from '@/app/components/TermDisplay/TermDisplay';

interface GamePageProps {
  params: {
    setId: string;
  };
}

const GamePage: React.FC<GamePageProps> = ({ params: { setId } }) => {
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
      <TermDisplay termSetId={parseInt(setId)} />
    </>
  );
};

export default GamePage;
