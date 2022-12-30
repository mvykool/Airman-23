import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'
import Link from 'next/link'


const Cards = () => {
  return (
    <div className='mt-10 md:w-[60vw] md:flex md:justify-center md:space-x-5'>
        {/**card 1 */}
        <div className='bg-white mb-10 rounded-sm shadow-lg'>
            <div className='p-4 md:p-6 md:h-[25vh] flex justify-between md:block md:px-14' >
              
           <div className='md:flex md:justify-center'>
             <div className='rounded-full bg-gray-200 h-14 md:h-20  w-14 md:w-20 flex justify-center items-center'>
                <MdLocalShipping className='text-2xl md:text-4xl text-[#00708c]'/>
            </div>

           </div>

            <div className='md:flex md:justify-center md:mt-10 md:text-center'>
            <h1 className='text-[#00708C] font-semibold flex text-xl items-center'>Domestic free shipping</h1>
            </div>

            </div>
        <Link href={'/shipping'}>
            <button className='text-white font-semibold h-10 md:h-14 bg-[#00708c] w-full rounded-b-sm'>
                    Check more info
            </button>
        </Link>

        </div>

         {/**card 2 */}
         <div className='bg-white mb-10 rounded-sm shadow-lg'>
            <div className='p-4 md:p-6 md:h-[25vh] flex justify-between md:block md:px-14' >
              
           <div className='md:flex md:justify-center'>
             <div className='rounded-full bg-gray-200 h-14 md:h-20  w-14 md:w-20 flex justify-center items-center'>
                <FaMoneyBillAlt className='text-2xl md:text-4xl text-[#00708c]'/>
            </div>

           </div>
              
           <div className='md:flex md:justify-center md:mt-10 md:text-center'>
            <h1 className='text-[#00708C] font-semibold flex text-xl items-center'>100% refund guarantee</h1>
            </div>

            </div>
        <Link href={'/refund'}>
            <button className='text-white font-semibold h-10 md:h-14 bg-[#00708c] w-full rounded-b-sm'>
                    Check more info
            </button>
        </Link>

        </div>

          {/**card 3 */}

          <div className='bg-white mb-10 rounded-sm shadow-lg'>
            <div className='p-4 md:p-6 md:h-[25vh] flex justify-between md:block md:px-14' >
              
           <div className='md:flex md:justify-center'>
             <div className='rounded-full bg-gray-200 h-14 md:h-20  w-14 md:w-20 flex justify-center items-center'>
                <MdSupportAgent className='text-2xl md:text-4xl text-[#00708c]'/>
            </div>

           </div>
              
           <div className='md:flex md:justify-center md:mt-10 md:text-center'>
            <h1 className='text-[#00708C] font-semibold flex text-xl items-center'>24/7 Customer Support</h1>
            </div>

            </div>
        <Link href={'/support/chat'}>
            <button className='text-white font-semibold h-10 md:h-14 bg-[#00708c] w-full rounded-b-sm'>
                    Ask any question!
            </button>
        </Link>

        </div>
    </div>
  )
}

export default Cards