import React from 'react'
import Image from 'next/image';

const Loader = () => {
  return (
    <div className='h-[100%] pt-80 bg-[var(--bg-loader)] w-full fixed z-20'>
        <div className='flex justify-center items-center md:pr-[20%]'>
        <Image className='md:h-20'  alt='loader' width={100} height={100} src='/Loader.svg' />
        </div>
    </div>
  )
}

export default Loader