'use client'
import React, { useState, useEffect } from 'react';
import TermDisplay from '@/app/components/TermDisplayLocal/TermDisplayLocal';

function shuffledIndex(list) {
  var indexes = Array.from(Array(list.length).keys());
  let shuffleList = indexes.sort(() => Math.random() - 0.5);
  return shuffleList;
}

function reorderList(list, orderIndexes) {
  const newList = [...list];
  const reorderedList = Array(list.length);

  orderIndexes.forEach((newIndex, originalIndex) => {
    reorderedList[newIndex] = newList[originalIndex];
  });

  return reorderedList;
}

export default function GamePage() {
  const [shuffledTermsList, setShuffledTermsList] = useState([]);
  const [shuffledImagesList, setShuffledImagesList] = useState([]);
  
  useEffect(() => {
    const termsList = JSON.parse(localStorage.getItem('termsList')) || [];
    if (termsList.length > 0) {
      const shuffledIndexList = shuffledIndex(termsList);
      const newShuffledTermsList = reorderList(termsList, shuffledIndexList);
      setShuffledTermsList(newShuffledTermsList);

    const imagesList = JSON.parse(localStorage.getItem('imageList')) || [];
    const newShuffledImagesList = reorderList(imagesList, shuffledIndexList);
    setShuffledImagesList(newShuffledImagesList);
    }
  }, []);

  if (!shuffledTermsList.length) {
    return <div>Loading...</div>;
  }

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
      <TermDisplay finalTermsList={shuffledTermsList} finalImagesList={shuffledImagesList} />
    </>
  );
}


