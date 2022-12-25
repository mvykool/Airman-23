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
 
  
 </div>
  )
}

export default support