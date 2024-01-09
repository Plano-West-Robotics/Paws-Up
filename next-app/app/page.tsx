'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
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

  const dogWidthPercentage = 40; // Adjust this percentage as needed
  const dogHeightPercentage = 30; // Adjust this percentage as needed
  const pawsWidthPercentage = 15; // Adjust this percentage as needed
  const pawsHeightPercentage = 15; // Adjust this percentage as needed

  return (
    <main className='bg-gradient-to-r from-green-200 to-blue-300 relative'>

      <div className='flex flex-row h-[calc(100vh-2rem)] z-0'>
        <div className='lg:w-1/2 w-full self-center flex flex-col items-center'>
          <div className='relative'>
            <h1 className='xl:text-10xl md:text-9xl text-7xl font-bold text-nowrap text-center'>Paws Up!</h1>
          </div>
          <p className='md:w-5/12 w-full xl:text-5xl md:text-4xl text-2xl font-bold text-center text-pretty lg:pb-16 md:pb-6 pb-3'>Unlock your true Paw-tential!</p>

          <div className='lg:pb-8 md:py-4 py-2 flex sm:flex-row flex-col'>
            <Link href='/game' className='bg-amber-400 hover:bg-amber-500 rounded-3xl xl:p-4 p-3 xl:text-7xl sm:text-6xl text-4xl text-white font-bold text-center mb-2 sm:mr-3 sm:mb-0 shrink-0'>Start!</Link> 
            <Link href='/help' className='bg-amber-400 hover:bg-amber-500 rounded-3xl xl:p-4 p-3 xl:text-7xl sm:text-6xl text-4xl text-white font-bold text-center shrink-0'>Help</Link>
          </div>

        </div>
        <div className='lg:w-1/2'></div>
      </div>
      <div style={{ position: 'absolute', top: '20%', left: '60%', transform: 'translateX(-50%)' }}>
        <Image
          src="/paws.png"
          className="object-cover"
          width={windowSize.width * (pawsWidthPercentage / 100)}
          height={windowSize.height * (pawsHeightPercentage / 100)}
          alt="Cartoon paws"
        />
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
