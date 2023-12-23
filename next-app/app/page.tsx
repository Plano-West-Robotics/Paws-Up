import Link from 'next/link'

export default function Home() {
  return (
    <main className='bg-gradient-to-r from-green-200 to-blue-300 flex flex-row'>

      <div className='lg:w-1/2 w-full self-center flex flex-col items-center'>
        <h1 className='xl:text-9xl md:text-8xl text-6xl font-bold text-nowrap'>Paws Up!</h1>
        <p className='xl:w-2/3 md:w-1/2 w-full xl:text-5xl md:text-3xl text-xl font-bold text-center lg:pb-32 md:pb-10 pb-5'>Unlock your true Paw-tential!</p>

        <div className='lg:pb-10 md:py-5 py-3 flex sm:flex-row flex-col'>
          <Link href='/game' className='bg-amber-400 hover:bg-amber-500 rounded-3xl xl:p-4 p-3 sm:text-7xl text-5xl text-white font-bold text-center mb-3 sm:mr-5 sm:mb-0 shrink-0'>Start!</Link> 
          <Link href='/help' className='bg-amber-400 hover:bg-amber-500 rounded-3xl xl:p-4 p-3 sm:text-7xl text-5xl text-white font-bold text-center shrink-0'>Help</Link>
        </div>

      </div>
    </main>
  )
}
