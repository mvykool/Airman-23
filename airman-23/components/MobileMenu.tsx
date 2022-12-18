import React, { useRef } from 'react'
import { useStateContext } from '../context/StateContext';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import Product from './Product';
import Link from 'next/link';
import { RiCloseFill, RiShoppingBagFill } from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import { MdCategory, MdArticle, MdContacts, MdSupportAgent, MdLogout } from 'react-icons/md'





const MobileMenu = () => {

  const { user, setOpenMenu } = useStateContext();
  const profileRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter()
 
  //logout

  const logOut = () => {
    auth.signOut()
    router.reload()
    setOpenMenu(false)
  }

   //to login

   const toLogin = () => {
    router.push("/login")
    setOpenMenu(false)
  }



  return (
    <>
    <div className='absolute bg-[var(--bg-wrapper)] z-40 w-full h-screen top-0 ' onClick={()=> setOpenMenu(false)}/> 
        <div className=' bg-white right-0 z-50 h-[100vh] top-0 w-60 fixed' ref={profileRef}>
          <div className='w-full bg-[#00708C] pb-10'>
          <div className='p-3' onClick={() => setOpenMenu(false)}>
            <RiCloseFill className='text-white text-2xl' />
          </div>
         
          {user ? (  
      
            <div className='flex justify-center mt-5 items-center'>
            <img
            src={user.photoURL ? user.photoURL
             : "https://cdn-icons-png.flaticon.com/512/6073/6073873.png" } alt="profile pic"
             className='h-12 border-4 rounded-full border-green-400'
             />
            <div className='flex flex-col'>
               <h2 className='mx-auto font-bold text-white text-md'>{user.displayName ? user.displayName : "Demo User "}🏀</h2>
              <p className='mx-3 text-gray-300 text-xs cursor-pointer'>{user.email ? user.email : "demouser@hotmail.com"}</p>
            </div>
      
         </div>
          
         ) : (

          <button onClick={toLogin}
          className='border-2 p-2 rounded-md'>Log In</button>
         ) }
       
       </div>
        
        {/**menu  */}
       <div className='flex flex-col ml-10 gap-8 mt-20'>
       <Link href={`/`} onClick={() => setOpenMenu(false)}>
         <div className='flex items-center space-x-2'>
          <AiFillHome className='text-xl text-[#00708C]'/>
         <button className='text-xl font-semibold text-[#00708C]'>Home</button>
         </div>
       </Link>

       {/**categories */}
       <div className='flex items-center space-x-2'>
         <MdCategory className='text-xl text-[#00708C]'/>
         <button className='text-xl font-semibold text-[#00708C]'>Categories</button> 
       </div>

       {/**blog */}

       <Link href={'/blog/posts'} onClick={() => setOpenMenu(false)}>
         <div className='flex  items-center space-x-2'>
           <MdArticle className='text-xl text-[#00708C]'/>
           <button className='text-xl font-semibold text-[#00708C]'>Blog</button>
         </div>
       </Link>

       {/**shop */}
       <Link href={'/shop'} onClick={() => setOpenMenu(false)}>
         <div className='flex items-center space-x-2'>
           <RiShoppingBagFill className='text-xl text-[#00708C]'/>
           <button className='text-xl font-semibold text-[#00708C]'>Shop</button>
         </div>
       </Link>

       {/**contact us */}
       <div className='flex  items-center space-x-2'> 
        <MdContacts className='text-xl text-[#00708C]'/>
        <button className='text-xl font-semibold text-[#00708C]'>Contact us</button>
       </div>

       {/**customer support */} 
       <div className='flex  items-center space-x-2'> 
         <MdSupportAgent className='text-xl text-[#00708C]' />
         <button className='text-xl font-semibold text-[#00708C]'> Support</button>
       </div>

       {/**log out */} 
       <div className='flex  items-center space-x-2'> 
       <MdLogout className='text-xl text-[#00708C]'/>
       <button type='button' onClick={logOut} className='text-xl font-semibold text-[#00708C]'>Log out</button>
       </div>
       </div>

       {/**footer */}

       <div className='absolute bottom-0 w-full bg-gray-300 p-5'>
         <h2 className='flex justify-center'>Airman-23  v1.0.0</h2>
       </div>
      

        </div>
    
    </>
  )
}

export default MobileMenu

