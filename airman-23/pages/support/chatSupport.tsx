import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const support = () => {

   //go back

   const router = useRouter()

   const goBack = () => {
     router.back()
   }
 
 
 
   return (
     <div className='pt-10 bg-gray-200 pb-10'>
 
     <Head>
       <title>Air man 23 | Support</title>
     </Head>   
 
     <div className='mt-10 bg-white shadow-md rounded-full h-10 w-10 flex justify-center items-center ml-8'>
       <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
     </div>
 
     <div className='flex justify-center mx-8 p-5 rounded-lg my-10 bg-[#00708C]'>
       <h1 className='font-bold text-white text-2xl'>Support</h1>
       </div>
 </div>
  )
}

export default support