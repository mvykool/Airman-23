import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'
import Link from 'next/link'
import { motion} from 'framer-motion'


/**framer motion variants */

const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 0.5, delay: 0.2}
  }
}



const Cards = () => {
  return (
    <div className='mt-10 md:w-[60vw] md:flex md:justify-center md:space-x-3'>
        {/**card 1 */}
        <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
        className='bg-white mb-10 rounded-sm shadow-lg hover:scale-105 duration-300 hover:shadow-2xl'>
            <div className='p-4 md:p-6 md:h-[38vh] flex justify-between md:block md:px-20' >
              
           <div className='md:flex md:justify-center'>
             <div className='rounded-full bg-gray-200 h-14 md:h-20 w-14 md:w-20 flex justify-center items-center'>
                <MdLocalShipping className='text-2xl md:text-4xl text-[#00708c]'/>
            </div>

           </div>

            <div className='md:flex md:justify-center md:mt-10 md:text-center'>
            <h1 className='text-[#00708C] font-semibold flex text-xl md:text-base items-center'>Domestic free shipping</h1>
            </div>

            </div>
        <Link href={'/shipping'}>
            <button className='text-white font-semibold h-10 md:text-sm md:h-14 bg-[#00708c] duration-100 hover:bg-[#005469] w-full rounded-b-sm'>
                    Check more info
            </button>
        </Link>

        </motion.div>

         {/**card 2 */}
         <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       className='bg-white mb-10 rounded-sm shadow-lg hover:scale-105 duration-300 hover:shadow-2xl'>
       <div className='p-4 md:p-6 md:h-[38vh] flex justify-between md:block md:px-20' >
              
           <div className='md:flex md:justify-center'>
             <div className='rounded-full bg-gray-200 h-14 md:h-20  w-14 md:w-20 flex justify-center items-center'>
                <FaMoneyBillAlt className='text-2xl md:text-4xl text-[#00708c]'/>
            </div>

           </div>
              
           <div className='md:flex md:justify-center md:mt-10 md:text-center'>
            <h1 className='text-[#00708C] font-semibold flex text-xl md:text-base items-center'>100% refund guarantee</h1>
            </div>

            </div>
        <Link href={'/refund'}>
        <button className='text-white font-semibold h-10 md:text-sm md:h-14 bg-[#00708c] duration-100 hover:bg-[#005469] w-full rounded-b-sm'>
                    Check more info
            </button>
        </Link>

        </motion.div>

          {/**card 3 */}

          <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       className='bg-white mb-10 rounded-sm shadow-lg hover:scale-105 duration-300 hover:shadow-2xl'>
       <div className='p-4 md:p-6 md:h-[38vh] flex justify-between md:block md:px-20' >
              
           <div className='md:flex md:justify-center'>
             <div className='rounded-full bg-gray-200 h-14 md:h-20  w-14 md:w-20 flex justify-center items-center'>
                <MdSupportAgent className='text-2xl md:text-4xl text-[#00708c]'/>
            </div>

           </div>
              
           <div className='md:flex md:justify-center md:mt-10 md:text-center'>
            <h1 className='text-[#00708C] font-semibold flex text-xl md:text-base items-center'>24/7 Customer Support</h1>
            </div>

            </div>
        <Link href={'/support/chat'}>
        <button className='text-white font-semibold h-10 md:text-sm md:h-14 bg-[#00708c] duration-100 hover:bg-[#005469] w-full rounded-b-sm'>
                   Ask any question!
            </button>
        </Link>

        </motion.div>
    </div>
  )
}

export default Cards