import Link from 'next/link'
import router from 'next/router'
import React from 'react'
import { topics } from '../utils/topics'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import Head from 'next/head';
import { motion} from 'framer-motion'

/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.7}
  }
}


const categories = () => {

  //go back

  const goBack = () => {
    router.back()
  }


  return (
    <div className='pb-20 bg-gray-200 pt-10'>


    <Head>
      <title>Air man 23 | Catagories</title>
    </Head>


     
    <div className='mt-10 md:mt-20 bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 flex justify-center items-center ml-8 hover:scale-125 duration-300 cursor-pointer' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div>

      <div className='flex justify-center mx-8 p-5 rounded-lg my-10 bg-[#00708C] md:mx-20'>

     

      <h1 className='font-bold text-white text-2xl'>Categories</h1>
      </div>

      {/**display categories */}

      <div className='flex md:hidden flex-col justify-center mx-8'>
        {topics.map((item: any) => (
          <Link href={{ pathname: `/category/${item.name}`}} key={item.name} className='my-2 relative'>
             <motion.p 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
             className='w-full z-10 absolute bg-[var(--bg-wrapper)] text-lg text-white flex justify-center p-4'>{item.name}</motion.p>
            <motion.img 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
            src={item.image} alt='cat-pic' className='h-[35vh] w-full' />
           </Link>
        ))}
      </div>

      {/**desktop view */}

      <div className='hidden md:block'>
         
      <div className='flex pl-[8%] mt-28'>
      <div className='flex flex-wrap space-x-5] mx-20'>
      {topics.map((item: any) => (
          <Link href={{ pathname: `/category/${item.name}`}} key={item.name} className='my-2  relative w-[30vw] mx-2 hover:scale-105 duration-300 hover:shadow-2xl'>
             <motion.p 
                variants={sectionVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
             className='w-full z-10 absolute bg-[var(--bg-wrapper)] text-lg text-white flex justify-center p-4'>{item.name}</motion.p>
            <motion.img 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
            src={item.image} alt='cat-pic' className='h-[35vh] md:h-[40vh] w-full' />
           </Link>
        ))}
      </div>
      </div>
      </div>
    </div>
  )
}

export default categories