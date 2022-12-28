import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
    <div className='hero '>
       <div className='bg-[var(--bg-wrapper)] h-[50vh] md:h-[60vh]'>
         <h1 className='flex justify-center pt-48 md:pt-64 md:text-4xl text-3xl text-white font-bold'>Air Man 23</h1>

         <div className='pt-16 md:pt-10 flex justify-center'>
         <Link href={'/shop'} >
         <p className='text-white text-lg border-b-2'>Go to shop</p>
         </Link>
       </div>
         </div>
    </div>
    </div>
  )
}

export default Hero