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
      <div className='mt-20 bg-[#00708c] py-10 relative'>
      {user ? (  
      
      <div className='flex mx-4 mt-7 items-center ml-8'>
      <Image
      width={50}
      height={50}
      src={user.photoURL ? user.photoURL
       : "https://cdn-icons-png.flaticon.com/512/6073/6073873.png" } alt="profile pic"
       className='h-12 md:h-16 md:w-16 border-4 rounded-full border-green-400'
       />
      <div className='flex flex-col'>
         <h2 className='mx-auto font-bold text-white text-md md:text-lg'>{user.displayName ? user.displayName : "Demo User "} 🏀</h2>
        <p className='mx-3 text-gray-300 text-xs cursor-pointer'>{user.email ? user.email : "demouser@hotmail.com"}</p>
      </div>

   </div>
    
   ) : (

    <div className='flex justify-center mt-5'>
      <button onClick={toLogin}
    className='font-semibold  p-2 rounded-md text-[#00807c] bg-white'>Log In</button>
    </div>
   ) }
 
      </div>

              {/**menu  */}
       <div className='flex flex-col md:space-y-4 ml-10 gap-5 md:pt-20'>
       <Link href={`/`} onClick={() => setOpenMenu(false)}>
         <div className='flex items-center space-x-2 md:space-x-4'>
          <AiFillHome className='text-xl md:text-2xl text-[#00708C]'/>
         <button className='text-xl font-semibold text-[#00708C]'>Home</button>
         </div>
       </Link>

       {/**categories */}
       <Link href={{ pathname: `/categories`}} onClick={() => setOpenMenu(false)} className='flex md:space-x-4 items-center space-x-2'>
         <MdCategory className='text-xl md:text-2xl text-[#00708C]'/>
         <button className='text-xl  font-semibold text-[#00708C]'>Categories</button> 
       </Link>

       {/**blog */}

       <Link href={'/blog/posts'} onClick={() => setOpenMenu(false)}>
         <div className='flex  items-center md:space-x-4 space-x-2'>
           <MdArticle className='text-xl md:text-2xl text-[#00708C]'/>
           <button className='text-xl font-semibold text-[#00708C]'>Blog</button>
         </div>
       </Link>

       {/**shop */}
       <Link href={'/shop'} onClick={() => setOpenMenu(false)}>
         <div className='flex items-center md:space-x-4 space-x-2'>
           <RiShoppingBagFill className='text-xl md:text-2xl text-[#00708C]'/>
           <button className='text-xl   font-semibold text-[#00708C]'>Shop</button>
         </div>
       </Link>

       {/**contact us */}
       <Link href={'/contact'} onClick={() => setOpenMenu(false)} className='flex  items-center md:space-x-4 space-x-2'> 
        <MdContacts className='text-xl  md:text-2xl text-[#00708C]'/>
        <button className='text-xl font-semibold text-[#00708C]'>Contact us</button>
       </Link>

       {/**customer support */} 
       <Link href={'/support/chat'} onClick={() => setOpenMenu(false)} className='flex md:space-x-4 items-center space-x-2'> 
         <MdSupportAgent className='text-xl md:text-2xl text-[#00708C]' />
         <button className='text-xl font-semibold text-[#00708C]'> Support</button>
       </Link>

       {/**log out */} 
       {user ? (
        <div className='flex  items-center space-x-2 md:space-x-4'> 
        <MdLogout className='text-xl  md:text-2xl text-[#00708C]'/>
        <button type='button'  onClick={logOut} className='text-xl  font-semibold text-[#00708C]'>Log out</button>
        </div>
       ) : (
         null
       )}
       </div>

       {/**footer */}

       <div className='absolute bottom-0 w-full bg-gray-300 p-5'>
         <h2 className='flex justify-center text-gray-500'>Airman-23 | v1.0.0</h2>
       </div>
        </div>
    </div>
  )
}

export default Sidebar