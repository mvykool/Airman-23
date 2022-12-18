import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'


const Cards = () => {
  return (
    <div className='mt-10'>
        {/**card 1 */}
        <div className='bg-white mb-10 rounded-sm shadow-lg'>
            <div className='p-4 flex justify-between ' >
              
            <div className='rounded-full bg-gray-200 h-14 w-14 flex justify-center items-center'>
                <MdLocalShipping className='text-2xl text-[#00708c]'/>
            </div>

            <h1 className='text-[#00708C] font-semibold flex text-xl items-center'>Domestic free shiping</h1>

            </div>
        <div>
            <button className='text-white font-semibold h-10 bg-[#00708c] w-full rounded-b-sm'>
                    Check more info
            </button>
        </div>

        </div>

         {/**card 2 */}
         <div className='bg-white mb-10 rounded-sm shadow-lg'>
            <div className='p-4 flex  justify-between ' >

            <div className='rounded-full bg-gray-200 h-14 w-14 flex justify-center items-center'>
                <FaMoneyBillAlt className='text-2xl text-[#00708c]'/>
            </div>

              
             <h1 className='text-[#00708C] font-semibold flex text-xl items-center'> 100% Refund guarantee</h1>
            </div>
        <div>
            <button className='text-white font-semibold h-10 bg-[#00708c] w-full rounded-b-sm'>
                    Check more info
            </button>
        </div>

        </div>

         {/**card 3 */}
         <div className='bg-white mb-10 rounded-sm shadow-lg'>
            <div className='p-4 flex  justify-between ' >
              
            <div className='rounded-full bg-gray-200 h-14 w-14 flex justify-center items-center'>
                <MdSupportAgent className='text-2xl text-[#00708c]'/>
            </div>

            <h1 className='text-[#00708C] font-semibold flex text-xl items-center'>24/7 Customer Support</h1>

            </div>
        <div>
            <button className='text-white font-semibold h-10 bg-[#00708c] w-full rounded-b-sm'>
                    Ask any question!
            </button>
        </div>

        </div>
    </div>
  )
}

export default Cards