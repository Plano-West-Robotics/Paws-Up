import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-gradient-to-r from-green-200 to-blue-300'>

      <div className='flex flex-row h-[calc(100vh-2rem)] z-0'>
        <div className='lg:w-1/2 w-full self-center flex flex-col items-center'>
          <div className='relative'>
            <h1 className='xl:text-9xl md:text-8xl text-6xl font-bold text-nowrap text-center'>Paws Up!</h1>
            <Image src="/paws.png" className="object-cover absolute z-10 -right-32 -bottom-32 invisible lg:visible" width={210} height={210} alt="Cartoon paws"/>
          </div>
          <p className='md:w-5/12 w-full xl:text-4xl md:text-3xl text-xl font-bold text-center text-pretty lg:pb-32 md:pb-10 pb-5'>Unlock your true Paw-tential!</p>

          <div className='lg:pb-10 md:py-5 py-3 flex sm:flex-row flex-col'>
            <Link href='/game' className='bg-amber-400 hover:bg-amber-500 rounded-3xl xl:p-4 p-3 sm:text-7xl text-5xl text-white font-bold text-center mb-3 sm:mr-5 sm:mb-0 shrink-0'>Start!</Link> 
            <Link href='/help' className='bg-amber-400 hover:bg-amber-500 rounded-3xl xl:p-4 p-3 sm:text-7xl text-5xl text-white font-bold text-center shrink-0'>Help</Link>
          </div>

        </div>
        <div className='lg:w-1/2'></div>
      </div>
      <Image src="/dog.png" className="object-cover invisible lg:visible h-auto w-auto absolute right-0 bottom-0 z-10" width={700} height={450} alt="A cute cartoon dog"/>
    </main>
  )
}
