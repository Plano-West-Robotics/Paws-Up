"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Timer from '../Timer/Timer';
import './styles.css'


const TermDisplay = ({ termSetId}) => {
  const [termsList, setTermsList] = useState([]);
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

  var [correct, setCorrect] = useState([]);
  var [passed, setPassed] = useState([]);

  const seconds = 30;
  const time = new Date();

  const animationMs = 1000;

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

  const [animateGreen, setAnimateGreen] = useState(false);
  const [position, setPosition] = useState({ x: '', y: '' });
  const [showDivGreen, setShowDivGreen] = useState(false);


  const handleGreenButtonClick = (event, id) => {
    setAsCorrect(id);
    setAnimateGreen(true);
  
    const x = event.clientX;
    const y = event.clientY;
  
    setPosition({ x, y });
    
    setShowDivGreen(true);
    setTimeout(() => {
      setAnimateGreen(false);
      setShowDivGreen(false);
    }, animationMs); // Replace 2000 with the duration of your animation in milliseconds
  }
  const [animateRed, setAnimateRed] = useState(false);
  const [showDivRed, setShowDivRed] = useState(false);

  const handleRedButtonClick = (event, id) => {
    setAsPassed(id);
    setAnimateRed(true);
  
    const x = event.clientX;
    const y = event.clientY;
  
    setPosition({ x, y });
    
    setShowDivRed(true);
    setTimeout(() => {
      setAnimateRed(false);
      setShowDivRed(false);
    }, animationMs); // Replace 2000 with the duration of your animation in milliseconds
  }

  const setAsPassed = (id) => {
    setPassed(passed => ([...passed, termsList[id]]));
    if (id !== termsList.length) {
      setCurrentTermIndex(id+1);
    } else {
     
    }
  }

  const setTimer = () => {
    time.setSeconds(time.getSeconds() + seconds);
    return time;
  }

  return (
    <div className='fixed z-0 left-0 top-0 h-screen w-screen'>
      <Link href='/'>
        <i className="fas fa-home text-gray-500 hover:text-gray-600 fixed fa-4x pb-2 pt-1 left-4"></i>
      </Link>
      {termsList.length === 0 || currentTermIndex < termsList.length ? (
        <>
          {/* ... (other code) */}
          <div className='absolute left-0 top-0 h-screen w-screen pointer-events-none'>
            <div className='absolute left-0 bottom-0 flex flex-row w-screen h-[calc(100%-5rem+8px)]'>
              <p className='text-8xl text-slate-50 text-center font-bold w-1/2 pt-0 mt-8'>Correct</p>
              <p className='text-8xl text-slate-50 text-center font-bold w-1/2 pt-0 mt-8'>Pass</p>
            </div>
            <div className='absolute w-screen bottom-0 flex flex-row'>
              <h1 className='absolute text-6xl font-bold text-nowrap text-white text-center right-[calc(50%+0.5%)] bottom-12'>Paws</h1>
              <h1 className='absolute text-6xl font-bold text-nowrap text-white text-center left-[calc(50%+0.5%)] bottom-12'>Up!</h1>
              <Image src="/paws_white.png" className="object-cover absolute z-10 left-[calc(50%+3.5%)] -bottom-4" width={100} height={100} alt="Cartoon paws" />
            </div>
            {termsList.length > 0 ? (
              <>
                <Timer expiryTimestamp={() => setTimer()} onExpire={() => setCurrentTermIndex(termsList.length)} />
                <div className='absolute top-[calc(50%+3.5%)] left-0 h-full w-full'>
                  <p className={`text-[${Math.max(13 + Math.round(-termsList[currentTermIndex].length / 3), 3)}rem]/[1] font-bold bg-slate-50 w-fit h-fit px-8 pt-6 pb-4 rounded-3xl shadow-lg text-center mx-auto -translate-y-1/2 z-20`}>{termsList[currentTermIndex]}</p>
                </div>
              </>
            ) : (
              <div className='absolute top-[calc(50%+3.5%)] left-0 h-full w-full'>
                <p className='text-[9rem]/[1] font-bold bg-slate-50 w-fit h-fit px-8 pt-6 pb-4 rounded-3xl shadow-lg text-center mx-auto -translate-y-1/2 z-20'>Loading terms...</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className='absolute w-fit right-4 top-2 flex flex-row'>
            <Image src="/paws_red.png" className="absolute object-cover z-10 -top-4 right-64" width={100} height={100} alt="Cartoon paws" />
            <h1 className='text-6xl font-bold text-nowrap text-center'>Paws Up!</h1>
          </div>
          <div className='absolute left-0 bottom-0 flex flex-row w-screen h-[calc(100%-5rem+8px)] items-stretch'>
            <div className='w-1/2 mt-8 mb-4 flex flex-col'>
              <p className='text-8xl text-slate-50 text-center font-bold pt-0'>Correct</p>
              <div className='bg-slate-50 overflow-y-auto m-4 px-8 py-4 rounded-3xl text-center text-5xl grow'>
                {correct.map(word => (
                  <ul key={word}>
                    <li className='text-pretty truncate'>{word}</li>
                  </ul>
                ))}
              </div>
            </div>
            <div className='w-1/2 mt-8 mb-4 flex flex-col'>
              <p className='text-8xl text-slate-50 text-center font-bold pt-0'>Review</p>
              <div className='bg-slate-50 overflow-y-auto m-4 px-8 py-4 rounded-3xl text-center text-5xl grow'>
                {passed.map(word => (
                  <ul key={word}>
                    <li className='text-pretty truncate'>{word}</li>
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
