import React, { useRef} from 'react'
import { useStateContext } from '../context/StateContext';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { RiCloseFill, RiShoppingBagFill } from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import { MdCategory, MdArticle, MdContacts, MdSupportAgent, MdLogout } from 'react-icons/md'

const Sidebar = () => {

  const { user, setOpenMenu, openMenu } = useStateContext();
  const profileRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter()

    //logout

    const logOut = () => {
      auth.signOut()
      router.push("/login")
      setOpenMenu(false)
    }

      //to login

   const toLogin = () => {
    router.push("/login")
    setOpenMenu(false)
  }

    //lock scroll when modal is opened
  

  return (
    <div className=' w-[16vw] h-screen hidden overflow-hidden md:block z-40'>
        <div className='hidden md:flex flex-col fixed bg-white w-[16vw] h-screen shadow-lg'>
      <div className='mt-10 bg-[#00708c] py-10 relative'>
      {user ? (  
      
      <div className='flex mx-4 items-center ml-4'>
      <Image
      width={100}
      height={100}
      src={user.photoURL ? user.photoURL
       : "https://cdn-icons-png.flaticon.com/512/6073/6073873.png" } alt="profile pic"
       className='h-12 md:h-10 md:w-10 md:border-2 border-4 rounded-full border-green-400'
       />
      <div className='flex flex-col'>
         <h2 className='mx-auto md:mx-2 font-bold text-white text-md md:text-sm'>{user.displayName ? user.displayName : "Demo User "} 🏀</h2>
        <p className='mx-3 md:mx-2 md:text-[11px] text-gray-300 text-xs cursor-pointer'>{user.email ? user.email : "demouser@hotmail.com"}</p>
      </div>

   </div>
    
   ) : (

    <div className='flex justify-center'>
      <button onClick={toLogin}
    className='font-semibold md:text-sm  p-2 rounded-md text-[#00807c] bg-white hover:bg-gray-200 duration-200 hover:scale-105 cursor-pointer'>Log In</button>
    </div>
   ) }
 
      </div>

              {/**menu  */}
       <div className='flex flex-col md:space-y-2 overflow-hidden md:pt-8'>
       <Link href={`/`} onClick={() => setOpenMenu(false)} className='md:side-icons md:flex md:items-center' >
         <div className='flex items-center space-x-2 md:space-x-4 '>
          <AiFillHome className='text-xl md:text-base  text-[#00708C]'/>
         <button className='text-xl md:text-base font-semibold text-[#00708C]'>Home</button>
         </div>
       </Link>

       {/**categories */}
       <Link href={{ pathname: `/categories`}} onClick={() => setOpenMenu(false)} className='md:side-icons md:flex md:items-center space-x-2'>
         <MdCategory className='text-xl md:text-base text-[#00708C]'/>
         <button className='text-xl md:text-base  font-semibold text-[#00708C]'>Categories</button> 
       </Link>

       {/**blog */}

       <Link href={'/blog/posts'} onClick={() => setOpenMenu(false)}>
         <div className='md:side-icons md:flex md:items-center space-x-2'>
           <MdArticle className='text-xl md:text-base text-[#00708C]'/>
           <button className='text-xl md:text-base font-semibold text-[#00708C]'>Blog</button>
         </div>
       </Link>

       {/**shop */}
       <Link href={'/shop'} onClick={() => setOpenMenu(false)}>
         <div className='md:side-icons md:flex md:items-center space-x-2'>
           <RiShoppingBagFill className='text-xl md:text-base text-[#00708C]'/>
           <button className='text-xl md:text-base  font-semibold text-[#00708C]'>Shop</button>
         </div>
       </Link>

       {/**contact us */}
       <Link href={'/contact'} onClick={() => setOpenMenu(false)} className='md:side-icons md:flex md:items-center space-x-2'> 
        <MdContacts className='text-xl  md:text-base text-[#00708C]'/>
        <button className='text-xl md:text-base font-semibold text-[#00708C]'>Contact us</button>
       </Link>

       {/**customer support */} 
       <Link href={'/support/chat'} onClick={() => setOpenMenu(false)} className='md:side-icons md:flex md:items-center space-x-2'> 
         <MdSupportAgent className='text-xl md:text-base text-[#00708C]' />
         <button className='text-xl md:text-base font-semibold text-[#00708C]'> Support</button>
       </Link>

       {/**log out */} 
       {user ? (
        <div className='md:side-icons md:flex md:items-center space-x-2'> 
        <MdLogout className='text-xl  md:text-base text-[#00708C]'/>
        <button type='button'  onClick={logOut} className='text-xl md:text-base  font-semibold text-[#00708C]'>Log out</button>
        </div>
       ) : (
         null
       )}
       </div>

       {/**footer */}

       <div className='absolute bottom-0 w-full bg-gray-300 p-5 md:p-2'>
         <h2 className='flex md:text-xs justify-center text-gray-500'>Airman-23 | v1.0.0</h2>
       </div>
        </div>
    </div>
  )
}

export default Sidebar