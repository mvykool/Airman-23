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




const Navbar = () => {


  //set route

  const router = useRouter();


  //search using useState

  const [search, setSearch] = useState('')

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search/${search}`)

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
      <div className='flex md:shadow-md md:h-20 h-14 justify-around md:justify-between md:px-10 md:pt-2 md:pb-2 bg-white w-full  items-center fixed z-30 top-0 ' >
         {/**Logo */}

         <div className='mx-2'>
           <Link href={'/'} onClick={() => setOpenMenu(false)}>
            <div className='md:flex md:items-center md:space-x-3'>
             <p className='hidden md:block md:text-xl'>Air man-23</p> 
            <Image src={'/fireball.png'} alt='logo' width={35} height={35} className='md:h-10 md:w-10'  />
            </div>
       </Link>
          
        </div>
       
       {/**search bar */}

       <div className='md:flex md:justify-center' >
         <form onSubmit={handleSearch} autoComplete="off">
         <input type="search"
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder='Search..' className='border-b-2 focus:outline-none w-48 md:w-[40vw]' />
          <button type='submit' className='bg-gray-400 text-white p-2 rounded-md'><FaSearch/></button>
         </form>
       </div>

       {/**menu */}

        {/**mobile menu, blog & cart */}
       
    <div className='flex space-x-4'>

           <button type='button' className='h-6 w-6 md:mr-4' onClick={() => setShowCart(true)}>
         <RiShoppingCartLine className='h-5 w-5 md:h-8 md:w-8'/>
         <span className='absolute text-xs pt-[1px] -mt-6 md:-mt-8 md:ml-2 bg-red-500 rounded-full w-4 h-4 text-white'>{totalQuantities}</span>
      </button>

      <div className='block md:hidden'>
          <TiThMenu className='h-5 w-5 block md:hidden'  onClick={() => setOpenMenu(true)}/>
        </div>
         



       {/**social media */}

      <div className='hidden md:block'>
        <div className='flex space-x-4 border-l-2 border-gray-400 pl-7 items-center'>
          <FaTiktok className='h-6 w-6 text-black cursor-pointer' />
          <FaTwitterSquare className='h-7 w-7 text-blue-300 cursor-pointer' />
          <ImFacebook2 className='h-6 w-6 text-blue-800 cursor-pointer' />
          <RiInstagramFill className='h-7 w-7 text-red-400 cursor-pointer' />
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

