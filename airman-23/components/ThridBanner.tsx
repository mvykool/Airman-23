import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

interface Props{
    heroBanner: any
}

const ThridBanner = ({heroBanner}: Props)  => {
  return (
    <div className='mx-5 bg-[#ACBCCF] rounded-sm my-10 md:w-[28vw]'>
       <div className='md:px-5'>
            <div className='flex justify-between mx-5 pt-2'>
          <div className='mt-5'>
            <img src={urlFor(heroBanner.image).url()} alt="img" className='h-28 md:h-40 mt-10 md:mt-4' />
          </div>

            <div className='mt-5'>
             <h3 className='text-sm md:text-lg  flex justify-center text-white'>{heroBanner.midText}</h3>
             <h1 className='text-lg flex justify-center font-bold text-black'>{heroBanner.largeText1}</h1>


           <div className='ml-14 mb-6 mt-7 md:mt-2  line'>
            <p className='text-gray-600 ml-3 line-through'>${heroBanner.discount}</p>
           <p className='text-white text-xl md:text-2xl'>${heroBanner.largeText2}!</p>
           </div>

           <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button className='ml-10 -mt-10 mb-5 p-2 md:p-3 bg-black text-white rounded-sm' type='button'>{heroBanner.buttonText}</button>
          </Link>
         
        </div>
            </div>
       
       
            </div>

      </div>
    </div>
  )
}

export default ThridBanner