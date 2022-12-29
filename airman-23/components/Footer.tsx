import React from 'react'
import Link from 'next/link'
import { BsFacebook, BsTwitter, BsInstagram, BsReddit } from 'react-icons/bs'
import { SiTiktok } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='w-full bg-[#00708C] p-5 overflow-hidden '>
       <div className='flex justify-around'>
       <div>
        <h2 className='text-white font-semibold'>Follow us</h2>

        <div>
          <h1 className='text-3xl mt-5 font-bold text-gray-300'> AM-23</h1>
        </div>

        <div className='text-gray-300 flex flex-wrap space-x-3 mt-7'>
          <BsFacebook/>
          <BsInstagram/>
          <BsReddit/>
          <BsTwitter/>
          <SiTiktok/>
        </div>

      </div>

      <div className='flex flex-col ml-10'>
        <h2 className='text-white font-semibold flex justify-center pb-5'>Links</h2>
         <div className='flex space-x-4 text-gray-300'>
         <ul className='flex flex-col gap-5'>
          <li>
            <Link href='/' className='underline'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/'  className='underline'>
              Shop
            </Link>
          </li>
          <li>
            <Link href='/'  className='underline'>
              Contact us
            </Link>
          </li>
         </ul>

         <ul className='flex flex-col gap-5'>
         <li>
            <Link href='/'  className='underline' >
              Blog
            </Link>
          </li>
          <li>
            <Link href='/'  className='underline'>
              Categories
            </Link>
          </li>
          <li>
            <Link href='/'  className='underline'>
              Support
            </Link>
          </li>
         </ul>
         </div>
      </div>
       </div>

       <hr className='my-8 w-[100vw]' />
      <div className='flex justify-between md:justify-around'> 
         <div>
          <p className='text-white font-bold'>Airman-23&copy;</p>
         </div>
        
        <div className='flex space-x-3'>
          <p className='text-xs text-gray-300'>Privacy Policy</p>
          <p className='text-xs text-gray-300'>|</p>
          <p className='text-xs text-gray-300'> Terms & Condition</p>
        </div>
      </div>
    </div>
  )
}

export default Footer