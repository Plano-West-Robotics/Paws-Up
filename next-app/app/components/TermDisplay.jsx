"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TermDisplay = ({ termSetId}) => {
  const [termsList, setTermsList] = useState([]);
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

  var [correct, setCorrect] = useState([]);
  var [passed, setPassed] = useState([]);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await fetch(`/api/getTerms/${termSetId}`);
        const { terms } = await response.json();

        setTermsList(terms);
      } catch (error) {
        console.error('Error fetching terms:', error);
      }
    };

    fetchTerms();


  }, [termSetId]);

  const setAsCorrect = (id) => {
    setCorrect(correct => ([...correct, termsList[id]]));
    if (id !== termsList.length) {
      setCurrentTermIndex(id+1);
    } else {
     
    }
  }

  const setAsPassed = (id) => {
    setPassed(passed => ([...passed, termsList[id]]));
    if (id !== termsList.length) {
      setCurrentTermIndex(id+1);
    } else {
     
    }
  }

  return (
    <div className='fixed z-0 left-0 top-0 h-screen w-screen'>
      <Link href='/'>
        <i className="fas fa-home text-gray-500 hover:text-gray-600 fixed fa-4x pb-2 pt-1 left-4"></i>
      </Link>
      {termsList.length == 0 || currentTermIndex < termsList.length ? (
      <>
        <div className = "fixed w-screen text-center text-orange-400 font-bold text-6xl pt-3 pointer-events-none"> 24s </div>
        <i className="fas fa-arrow-right text-gray-500 hover:text-gray-600 fixed fa-4x pb-2 pt-1 right-4 hover:cursor-pointer" onClick={() => setCurrentTermIndex(termsList.length)}></i>
        <div className='flex flex-row w-screen h-[calc(100%-5rem+8px)] items-end mt-[calc(5rem-8px)]'>
          <button className='hover:bg-green-500 w-1/2 h-full' onClick={() => setAsCorrect(currentTermIndex)}>
          </button>
          <button className='hover:bg-red-500 w-1/2 h-full' onClick={() => setAsPassed(currentTermIndex)}>
          </button>
        </div>

        <div className='absolute left-0 top-0 h-screen w-screen pointer-events-none'>
          <div className='absolute left-0 bottom-0 flex flex-row w-screen h-[calc(100%-5rem+8px)]'>
            <p className='text-8xl text-slate-50 text-center font-bold w-1/2 pt-0 mt-8'>Correct</p>
            <p className='text-8xl text-slate-50 text-center font-bold w-1/2 pt-0 mt-8'>Pass</p>
          </div>
          <div className='absolute w-screen bottom-0 flex flex-row'>
            <h1 className='absolute text-6xl font-bold text-nowrap text-white text-center right-[calc(50%+0.5%)] bottom-12'>Paws</h1>
            <h1 className='absolute text-6xl font-bold text-nowrap text-white text-center left-[calc(50%+0.5%)] bottom-12'>Up!</h1>
            <Image src="/paws_white.png" className="object-cover absolute z-10 left-[calc(50%+3.5%)] -bottom-4" width={100} height={100} alt="Cartoon paws"/>
          </div>

          {termsList.length > 0 ? (
            <p className='text-[11rem]/[1] font-bold bg-slate-50 w-fit px-8 pt-6 pb-4 rounded-3xl shadow-lg text-center mx-auto mt-80 z-20'>{termsList[currentTermIndex]}</p>
          ) : (
            <p className='text-[9rem]/[1] font-semibold bg-slate-50 w-fit px-8 pt-6 pb-1 rounded-3xl shadow-lg text-center mx-auto mt-80 z-20'>Loading terms...</p>
          )}
        </div>
      </>
      ) : (
      <>
        <div className='absolute w-fit right-4 top-2 flex flex-row'>
          <Image src="/paws_red.png" className="absolute object-cover z-10 -top-4 right-64" width={100} height={100} alt="Cartoon paws"/>
          <h1 className='text-6xl font-bold text-nowrap text-center'>Paws Up!</h1>
        </div>
        <div className='absolute left-0 bottom-0 flex flex-row w-screen h-[calc(100%-5rem+8px)] items-stretch'>
          <div className='w-1/2 mt-8 mb-4 flex flex-col'>
            <p className='text-8xl text-slate-50 text-center font-bold pt-0'>Correct</p>
            <div className='bg-slate-50 overflow-y-auto m-4 px-8 py-4 rounded-3xl text-center text-4xl grow'>
              {correct.map(word => (
                <ul key={word}>
                  <li>{word}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className='w-1/2 mt-8 mb-4 flex flex-col'>
            <p className='text-8xl text-slate-50 text-center font-bold pt-0'>Review</p>
            <div className='bg-slate-50 overflow-y-auto m-4 px-8 py-4 rounded-3xl text-center text-4xl grow'>
              {passed.map(word => (
                <ul key={word}>
                  <li>{word}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </>
      )}
    </div>
  );
};

export default TermDisplay;
