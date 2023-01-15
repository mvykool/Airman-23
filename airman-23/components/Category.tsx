import React from 'react'
import { topics } from '../utils/topics'
import Link from 'next/link'
import { motion} from 'framer-motion'

/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.2}
  }
}
 

const Category = () => {
  return (
    <div className=' w-full'>
 

        <div className='md:flex md:justify-center'>
        <h1 className='mt-10 md:mt-4 mb-10 border-b-4 border-[#00708c] w-28 ml-8 font-bold text-lg md:w-[18%] md:text-center md:text-xl'>Categories</h1>

        </div>

       <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       className='flex overflow-x-auto h-16 py-2 mt-5 mb-10 md:flex md:justify-center md:flex-wrap md:space-x-5]  md:h-20 md:w-[85vw]'>
        {topics.map((topic) => (
          <Link href={{ pathname: `/category/${topic.name}`}} key={topic.name} className='bg-white shadow-md text-[#00708c] md:w-[7vw] md:h-10 font-semibold border-2 border-[#00708c] mx-4 flex justify-center items-center rounded-md hover:scale-105 hover:bg-gray-100 cursor-pointer duration-300'>
            <p className='m-4 md:text-sm'>{topic.name}</p>
          </Link>
        ))}
       </motion.div>
    </div>
  )
}

export default Category