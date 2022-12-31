import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

interface Props{
    heroBanner: any
}

const SecondHeroBanner = ({heroBanner}: Props) => {
  return (
    <div className='mx-5 bg-red-400 rounded-sm my-10 md:w-[22vw] hover:scale-105 duration-300 hover:bg-red-500 hover:shadow-md'>
    <div  className='md:px-5'>
        <div className='flex justify-between mx-5 md:mx-4 pt-2'>
        <div className='mt-5'>
         <h3 className='text-sm flex md:text-lg justify-center text-white'>{heroBanner.midText}</h3>
         <h1 className='text-lg font-bold text-black'>{heroBanner.largeText1}</h1>

         <div className='ml-2 mb-6 mt-10 md:mt-8  line'>
        <p className='text-gray-600 line-through'>${heroBanner.discount}</p>
       <p className='text-white text-xl md:text-2xl'>${heroBanner.largeText2}!</p>
       </div>

    <div>
      <Link href={`/product/${heroBanner.product}`}>
        <button className='ml-1 -mt-10 mb-5 p-2 md:mt-2  bg-black text-white rounded-sm' type='button'>{heroBanner.buttonText}</button>
      </Link>
     
    </div>
        </div>
   
   <div className='mt-5'>
     <img src={urlFor(heroBanner.image).url()} alt="img" className='h-28 md:h-32 mt-10 md:mt-12' />
   </div>
        </div>

     
  </div>
</div>
  )
}

export default SecondHeroBanner