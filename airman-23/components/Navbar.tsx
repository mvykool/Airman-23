import React, {  useState} from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

import { TiThMenu } from 'react-icons/ti'


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
      <div className='flex md:h-20 h-14 justify-around md:justify-evenly md:px-10 md:pt-2 md:pb-2 bg-white w-full  items-center fixed z-30 top-0 ' >
         {/**Logo */}

         <div className='mx-2'>
           <Link href={'/'} onClick={() => setOpenMenu(false)}>
           <Image src={'/fireball.png'} alt='logo' width={35} height={35} className='md:h-14 w-14'  />
       </Link>
          
        </div>
       
       {/**search bar */}

       <div >
         <form onSubmit={handleSearch} autoComplete="off">
         <input type="search"
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder='Search..' className='border-b-2 focus:outline-none w-48 md:w-[50vw]' />
         </form>
       </div>

       {/**menu */}

        {/**mobile menu, blog & cart */}
       
       <button type='button' className='h-6 w-6' onClick={() => setShowCart(true)}>
         <RiShoppingCartLine className='h-5 w-5 md:h-8 md:w-8'/>
         <span className='absolute text-xs pt-[1px] -mt-6 md:-mt-8 md:ml-2 bg-red-500 rounded-full w-4 h-4 text-white'>{totalQuantities}</span>
      </button>
          
     
      {showCart && <Cart />}


      <div className='block md:hidden'>
          <TiThMenu className='h-5 w-5 block md:hidden'  onClick={() => setOpenMenu(true)}/>
        </div>
         

       {openMenu && <MobileMenu />}   
           

      </div>
  )
  
}

export default Navbar

