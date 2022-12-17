import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
    <div className='hero '>
       <div className='bg-[var(--bg-wrapper)] h-[50vh]'>
         <h1 className='flex justify-center pt-48 text-2xl text-white'>Air Man 23</h1>

         <div className='pt-16 flex justify-center'>
         <Link href={'/shop'} >
         <p className='text-white text-lg border-b-2'>shop</p>
         </Link>
       </div>
         </div>
    </div>
    </div>
  )
}

export default Hero