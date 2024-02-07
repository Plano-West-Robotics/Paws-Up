'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as Ariakit from "@ariakit/react";


export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [pawsPosition, setPawsPosition] = useState({
    top: '30%',
    left: '40%',
    transform: 'translateX(-50%)',
  });

  useEffect(() => {
    function handleResize() {
      const newWindowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      // Adjust positioning of paws image based on window size
      const newPawsPosition = {
        top: `${newWindowSize.height * 0.30}px`,
        left: `${newWindowSize.width * 0.4}px`,
        transform: 'translateX(-50%)',
      };

      setWindowSize(newWindowSize);
      setPawsPosition(newPawsPosition);
    }

    // Set initial window size
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  const dogWidthPercentage = 40;
  const dogHeightPercentage = 30;

  return (
    <main className='bg-gradient-to-r from-green-200 to-blue-300 relative'>
      <div className='flex flex-row h-[calc(100vh-2rem)] z-0'>
        <div className='lg:w-1/2 w-full self-center flex flex-col items-center'>
          <div className='flex py-19'>
            <h1 className='xl:text-10xl md:text-9xl text-7xl font-bold  text-center'>Paws Up!</h1>
            <div style={{ position: 'absolute', ...pawsPosition }}>
              <Image
                src="/paws.png"
                className="object-cover"
                width={210}
                height={210}
                alt="Cartoon paws"
              />
            </div>
          </div>
          <p className='md:w-5/12 w-full xl:text-5xl md:text-4xl text-2xl font-bold text-center text-pretty lg:pb-16 md:pb-6 pb-3'>Unlock your true Paw-tential!</p>

          <div className='lg:pb-8 md:py-4 py-2 flex sm:flex-row flex-col'>
            <Ariakit.PopoverProvider>
              <Ariakit.PopoverDisclosure>
                <div className='bg-amber-400 hover:bg-amber-500 rounded-3xl xl:p-4 p-3 xl:text-7xl sm:text-6xl text-4xl text-white font-bold text-center mb-2 sm:mr-3 sm:mb-0 shrink-0'>
                  Start!
                </div>
              </Ariakit.PopoverDisclosure>
              <Ariakit.Popover >
                <Ariakit.PopoverArrow/>
                <div className='padding-y-5'></div>
                  <Ariakit.Button>
                    <Link href="/game" className="bg-amber-400 hover:bg-amber-500 rounded-3xl xl:p-4 p-3 xl:text-7xl sm:text-6xl text-4xl text-white font-bold text-center mb-2 sm:mr-3 sm:mb-0 shrink-0">Online
                    </Link>
                  </Ariakit.Button>
                  <Ariakit.Button >
                    <Link href="/local"className="bg-amber-400 hover:bg-amber-500 rounded-3xl xl:p-4 p-3 xl:text-7xl sm:text-6xl text-4xl text-white font-bold text-center mb-2 sm:mr-3 sm:mb-0 shrink-0">Local
                    </Link>
                  </Ariakit.Button>
              </Ariakit.Popover>
            </Ariakit.PopoverProvider>
            <Link href='/help' className='bg-amber-400 hover:bg-amber-500 rounded-3xl xl:p-4 p-3 xl:text-7xl sm:text-6xl text-4xl text-white font-bold text-center shrink-0'>Help</Link>
            </div>
          </div>
        <div className='lg:w-1/2'></div>
      </div>
      <Image
        src="/dog.png"
        className="object-cover absolute right-0 bottom-0 z-10"
        alt="A cute cartoon dog"
        priority
        width={windowSize.width * (dogWidthPercentage / 100)}
        height={windowSize.height * (dogHeightPercentage / 100)}
      />
    </main>
  );
}