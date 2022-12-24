import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { MdOutlineKeyboardBackspace, MdSupportAgent } from 'react-icons/md'


const support = () => {

   //go back

   const router = useRouter()

   const goBack = () => {
     router.back()
   }
 
 
 
   return (
     <div className='pt-2 bg-gray-200 pb-20'>
 
     <Head>
       <title>Air man 23 | Support</title>
     </Head>   
 
     <div className='w-full bg-[#00708c] h-[42vh] pt-10'>
     <div className='mt-10 bg-white shadow-md rounded-full h-10 w-10 flex justify-center items-center ml-8'>
       <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
     </div>
 
     <div className='flex justify-center text-center mx-8 p-5 rounded-lg my-5'>
       <h1 className='font-bold text-white text-2xl'>Welcome to our chat support 24/7</h1>
       </div>


       <div className='flex justify-center text-white text-5xl'>
      <MdSupportAgent/>
     </div>

     </div>

     {/**form */}

     <div>
      <p className='text-[#00708c] text-lg font-bold my-10 mx-8 text-center'>Enter your email & name to get started.</p>
     </div>

     <div className='mx-8 my-10 bg-white rounded-lg shadow-md pt-5 pb-20'>
      <form className='flex flex-col mx-6'>
        <label className='font-semibold m-3'>Name</label>
        <input type="text" placeholder='Name' className='border-2 border-[#00708c]  p-2 rounded-md outline-none mb-5' required />
        <label className='font-semibold m-3'>Email Address</label>
        <input type='email' placeholder='Email Address' required className='border-2 border-[#00708c] p-2 rounded-md outline-none mb-5'/>

        <button type='submit' className='bg-[#004e61] p-3 rounded-md mx-8 font-semibold text-white my-5'>Get started</button>
      </form>
     </div>
 </div>
  )
}

export default support