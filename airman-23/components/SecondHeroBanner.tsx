import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

interface Props{
    heroBanner: any
}

const SecondHeroBanner = ({heroBanner}: Props) => {
  return (
    <div className='mx-5 bg-red-400 rounded-sm my-10'>
    <div>
        <div className='flex justify-between mx-5 pt-2'>
        <div className='mt-5'>
         <h3 className='text-sm flex justify-center text-white'>{heroBanner.midText}</h3>
         <h1 className='text-lg font-bold text-black'>{heroBanner.largeText1}</h1>

         <div className='ml-2 mb-6 mt-10 line'>
        <p className='text-gray-600 line-through'>${heroBanner.discount}</p>
       <p className='text-white text-xl'>${heroBanner.largeText2}!</p>
       </div>

    <div>
      <Link href={`/product/${heroBanner.product}`}>
        <button className='ml-1 -mt-10 mb-5 p-2 bg-black text-white rounded-sm' type='button'>{heroBanner.buttonText}</button>
      </Link>
     
    </div>
        </div>
   
   <div className='mt-5'>
     <img src={urlFor(heroBanner.image).url()} alt="img" className='h-28 mt-10' />
   </div>
        </div>

     
  </div>
</div>
  )
}

export default SecondHeroBanner