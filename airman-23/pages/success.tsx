import React from 'react'
import Link from 'next/link'

const success = () => {
  return (
    <div className='bg-gray-200 w-screen md:flex md:justify-center h-screen md:pr-[20%] '>
       <div className='flex justify-center items-center '>
      <div className=' bg-white mt-[50%] md:mt-1 py-20 px-10 md:px-20 rounded-lg shadow-xl flex-col'>
      <h1 className='text-green-400  text-lg md:text-2xl'>Thank you for your purchase!</h1>

     <Link href={'/'} className='justify-center flex mt-10'>
         <button className='py-4 px-5 rounded-md shadow-md text-white bg-[#00708c]'>Continue Shopping</button>
     </Link>
      </div>
       </div>
    </div>
  )
}

export default success