import React, { useRef } from 'react'
import { useStateContext } from '../context/StateContext';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import Product from './Product';
import Link from 'next/link';




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
    <div className='wrapper' ref={profileRef}>
        <div className='bg-blue-200 fixed right-0 z-50 h-[100vh] top-0 w-80'>
          <div onClick={() => setOpenMenu(false)}>CLose</div>
         
          {user ? (  
          <div>
            <div className='flex justify-center mt-20'>
            <img
            src={user.photoURL ? user.photoURL
             : "https://cdn-icons-png.flaticon.com/512/6073/6073873.png" } alt="profile pic"
             className='h-24 border-8 rounded-full border-red-500'
             />
         </div>

         <div className='flex flex-col mt-10'>
          <h2 className='mx-auto font-bold text-lg'>{user.displayName ? user.displayName : "Demo User"}</h2>
          <p className='mx-auto text-gray-400 cursor-pointer'>{user.email ? user.email : "demouser@hotmail.com"}</p>
       </div>
      
         
        
        {/**log out  */}
       <div className='flex flex-col justify-center items-center mt-36'>
        <button>Home</button>

       {/**blog */}

       <Link href={'/blog/posts'} onClick={() => setOpenMenu(false)}>
         <button>Blog</button>
       </Link>
       <Link href={'/shop'} onClick={() => setOpenMenu(false)}>
         <button>Shop</button>
       </Link>
        <button>Customer Support</button>
       <button type='button' onClick={logOut} className='font-bold text-lg text-black'>Log out</button>
       </div>
      
       </div>

         ) : (

          <button onClick={toLogin}
          className='border-2 p-2 rounded-md'>Log In</button>
         ) }
        </div>
    </div>
  )
}

export default MobileMenu

