import React, {  useState} from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MobileMenu from './MobileMenu';


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

console.log(openMenu)
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
      <div className='flex h-14 justify-around bg-white w-full items-center fixed top-0 ' >
         {/**Logo */}

         <div className='mx-2'>
           <Link href={'/'} onClick={() => setOpenMenu(false)}>
           <h3>AM-23</h3>
       </Link>
          
        </div>
       
       {/**search bar */}

       <div >
         <form onSubmit={handleSearch} autoComplete="off">
         <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search..' className='border-b-2 focus:outline-none w-48' />
         </form>
       </div>

       {/**menu */}

        {/**mobile menu, blog & cart */}
       
       <button type='button' className='h-6 w-6' onClick={() => setShowCart(true)}>
         <RiShoppingCartLine className='h-5 w-5'/>
         <span className='absolute text-xs -mt-6 bg-[#00708C] rounded-full w-4 h-4 text-white'>{totalQuantities}</span>
      </button>
          
     
      {showCart && <Cart />}


      <div>
          <TiThMenu className='h-5 w-5'  onClick={() => setOpenMenu(true)}/>
        </div>
         

       {openMenu && <MobileMenu />}   
           

      </div>
  )
  
}

export default Navbar

