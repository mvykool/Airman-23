import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const contact = () => {


   //go back

  const router = useRouter()

  const goBack = () => {
    router.back()
  }



  return (
    <div className='pt-10 bg-gradient pb-10'>

    <Head>
      <title>Air man 23 | Contact</title>
    </Head>   

    <div className='mt-10 bg-white shadow-md rounded-full h-10 w-10 flex justify-center items-center ml-8'>
      <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
    </div>

    <div className='flex justify-center mx-8 p-5 rounded-lg mt-10 mb-5 bg-white'>
      <h1 className='font-bold text-[#00708c] text-2xl'>Contact us</h1>
      </div>

    <div className='flex justify-center'>  
    <form className='flex flex-col justify-center p-3 my-2'>
          <label className='bg-black w-20 font-semibold rounded-md flex justify-center p-1 my-4 text-white'>Name</label>
          <input type="text" placeholder='Your Name' className='p-2 rounded-md outline-none'/>
          <label className='bg-black w-20 font-semibold rounded-md flex justify-center p-1 my-4 text-white'>Email</label>
          <input type="text" placeholder='Email Address' className='p-2 rounded-md outline-none'/>
          <label className='bg-black w-20 font-semibold rounded-md flex justify-center p-1 my-4 text-white'>Message</label>
          <input type="text" placeholder='Message' className='px-2 pt-2 pb-36 rounded-md outline-none'/>
          <button className='my-5 rounded-md cursor-pointer bg-black text-white font-bold p-1' type='submit'>Submit</button>
    </form>
   </div>
</div>
  )
}

export default contact