import Link from 'next/link'
import router from 'next/router'
import React from 'react'
import { topics } from '../utils/topics'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import Head from 'next/head';

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


     <div className='mt-10 bg-white shadow-md rounded-full h-10 w-10 flex justify-center items-center ml-8'>
        <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
      </div>

      <div className='flex justify-center mx-8 p-5 rounded-lg my-10 bg-[#00708C]'>

     

      <h1 className='font-bold text-white text-2xl'>Categories</h1>
      </div>

      {/**display categories */}

      <div className='flex flex-col justify-center mx-8'>
        {topics.map((item: any) => (
          <Link href={{ pathname: `/category/${item.name}`}} key={item.name} className='my-2 relative'>
             <p className='w-full z-10 absolute bg-[var(--bg-wrapper)] text-lg text-white flex justify-center p-4'>{item.name}</p>
            <img src={item.image} alt='cat-pic' className='h-[35vh] w-full' />
           </Link>
        ))}
      </div>
    </div>
  )
}

export default categories