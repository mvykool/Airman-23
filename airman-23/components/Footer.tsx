import React from 'react'
import Link from 'next/link'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { SiTiktok } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='w-full bg-[#00708C] p-5 overflow-hidden '>
       <div className='flex justify-around md:ml-48 items-center'>
       <div>
        <h2 className='text-white font-semibold md:text-xl'>Follow us</h2>

        <div className='md:hidden'>
          <h1 className='text-3xl mt-5 font-bold text-gray-400'> AM-23</h1>
        </div>

       


        <div className='text-gray-300 flex flex-wrap space-x-3 mt-7 md:text-2xl'>
        <a href="https://www.tiktok.com/@23airman23"  target="_blank">
        <SiTiktok className='h-5 w-5 cursor-pointer hover:scale-125 duration-100' />
        </a>
          
        <a href="https://twitter.com/airman27766886" target="_blank">
        <BsTwitter className='h-5 w-5  cursor-pointer hover:scale-125 duration-100' />
          
        </a>

        <a href="https://www.facebook.com/profile.php?id=100088716747015" target="_blank">
        <BsFacebook className='h-5 w-5  cursor-pointer hover:scale-125 duration-100' />
        </a>

        <a href="https://www.instagram.com/23airman23/" target="_blank">
        <BsInstagram className='h-5 w-5 cursor-pointer hover:scale-125 duration-100' />
        </a>
        </div>

      </div>

  
      <div className='hidden md:flex space-x-2'>
          <h1 className='text-xl mt-5 font-thin arrival-text text-gray-400 logo-font'> Airman-23</h1>
          <img src="/fireball.png" className='h-16' alt="" />
        </div>

      <div className='flex flex-col ml-10'>
    
       <div className='flex space-x-10'>
         <h2 className='text-white font-semibold flex justify-center pb-5'>Links </h2>

        <h2 className='text-white font-semibold flex justify-center pb-5'>more</h2>
       </div>
       
         <div className='flex space-x-5 text-gray-300'>
         <ul className='flex flex-col gap-5'>
          <li>
            <Link href='/home' className='underline'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/shop'  className='underline'>
              Shop
            </Link>
          </li>
          <li>
            <Link href='/contact'  className='underline'>
              Contact us
            </Link>
          </li>
         </ul>

         <ul className='flex flex-col gap-5'>
         <li>
            <Link href='/blog'  className='underline' >
              Blog
            </Link>
          </li>
          <li>
            <Link href='/categories'  className='underline'>
              Categories
            </Link>
          </li>
          <li>
            <Link href='/support'  className='underline'>
              Support
            </Link>
          </li>
         </ul>
         </div>
      </div>
       </div>

       <hr className='my-8 w-[100vw]' />
      <div className='flex justify-between md:ml-96'> 
         <div>
          <p className='text-white font-bold'>Airman-23&copy;</p>
         </div>
        
        <div className='flex space-x-3'>
          <Link href={'/refund'} className='text-xs md:text-base text-gray-300'>Privacy Policy</Link>
          <p className='text-xs md:text-base text-gray-300'>|</p>
          <Link href={'/refund'} className='text-xs md:text-base text-gray-300'> Terms & Condition</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer