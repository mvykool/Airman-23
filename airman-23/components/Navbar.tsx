import React, {  useState} from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

import { TiThMenu } from 'react-icons/ti'


import { ImFacebook2 } from 'react-icons/im'
import { FaTwitterSquare, FaTiktok, FaSearch } from 'react-icons/fa'
import { RiInstagramFill} from 'react-icons/ri'
import Head from 'next/head';




const Navbar = () => {


  //set route

  const router = useRouter();


  //search using useState

  const [search, setSearch] = useState('')

  const handleSearch = (e: any) => {
    e.preventDefault();
    let query = search.toLowerCase();
    router.push(`/search/${query}`)

    setSearch('')
  }

  //use context
 const {showCart, setShowCart, totalQuantities, openMenu, setOpenMenu } = useStateContext();
 


//lock scrolling when modals are opened 


if (typeof window !== "undefined") {
  let body = window.document.body;

 if(openMenu === true){
  body.style.position = 'fixed'
  body.style.overflow = 'hidden'
}else if(showCart === true){
  body.style.position = 'fixed'
  body.style.overflow = 'hidden'
}else {
  body.style.position = 'relative'
  body.style.overflow = 'auto'
}
}


  return (
      <div className='flex  shadow-md h-14 md:h-[8%] justify-around md:justify-between md:px-8 md:pt-2 md:pb-3 bg-white items-center fixed w-screen z-30 top-0 ' >

         {/**Logo */}

         <div className='mx-2'>
           <Link href={'/'} onClick={() => setOpenMenu(false)}>
            <div className='md:flex md:items-center md:space-x-3'>
             <p className='hidden md:block md:text-xl text-gray-500 logo-font'>Air man-23</p> 
            <Image src={'/fireball.png'} alt='logo' width={35} height={35} className='md:h-8 md:w-8'  />
            </div>
       </Link>
          
        </div>
       
       {/**search bar */}

       <div className='md:flex md:justify-center md:items-center' >
         <form onSubmit={handleSearch} autoComplete="off">
         <input type="search"
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder='Search..' className='border-b-2 focus:outline-none w-48 md:w-[35vw]' />
          <button type='submit' className='bg-gray-400 text-white hover:scale-105 hover:bg-gray-500 p-2 rounded-md duration-100'><FaSearch/></button>
         </form>
       </div>

       {/**menu */}

        {/**mobile menu, blog & cart */}
       
    <div className='flex space-x-4'>

           <button type='button' className='h-6 w-6 md:mr-4' onClick={() => setShowCart(true)}>
         <RiShoppingCartLine className='h-5 w-5  hover:scale-125 duration-100'/>
         <span className='absolute text-xs pt-[1px] md:pt-0 -mt-6 bg-red-500 rounded-full w-4 h-4 text-white'>{totalQuantities}</span>
      </button>

      <div className='block md:hidden'>
          <TiThMenu className='h-6 w-6 block md:hidden'  onClick={() => setOpenMenu(true)}/>
        </div>
         



       {/**social media */}

      <div className='hidden md:block'>
        <div className='flex space-x-4 border-l-2 border-gray-400 pl-7 items-center'>
        <a href="https://www.tiktok.com/@23airman23"  target="_blank">
        <FaTiktok className='h-5 w-5 text-black cursor-pointer hover:scale-125 duration-100' />
        </a>
          
        <a href="https://twitter.com/airman27766886" target="_blank">
        <FaTwitterSquare className='h-5 w-5 text-blue-300 cursor-pointer hover:scale-125 duration-100' />
          
        </a>

        <a href="https://www.facebook.com/profile.php?id=100088716747015" target="_blank">
        <ImFacebook2 className='h-5 w-5 text-blue-800 cursor-pointer hover:scale-125 duration-100' />
        </a>

        <a href="https://www.instagram.com/23airman23/" target="_blank">
        <RiInstagramFill className='h-5 w-5 text-red-400 cursor-pointer hover:scale-125 duration-100 rounded-full' />
        </a>
        </div>
      </div>     
      
    </div> 

    {/**cart and mobile menu */}

    {showCart && <Cart />}

    {openMenu && <MobileMenu />}   
           

      </div>
  )
  
}

export default Navbar

