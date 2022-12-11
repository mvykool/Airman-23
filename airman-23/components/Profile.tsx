import React, { useRef } from 'react'
import { useStateContext } from '../context/StateContext';
import { auth } from '../firebase';
import { useRouter } from 'next/router';

const Profile = () => {

  const { user, setProfile } = useStateContext();
  const profileRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter()
 
  //logout

  const logOut = () => {
    auth.signOut()
    router.reload()
  }

  console.log(user)

  return (
    <div ref={profileRef}>
        <div className='bg-blue-200 fixed right-0 z-50 h-[100vh] top-0 w-80'>
          <div onClick={() => setProfile(false)}>CLose</div>
         
          {user && 
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
        <button>Dark mode</button>
       <button type='button' onClick={logOut} className='font-bold text-lg text-pink-500 cursor-pointer transition duration-150 hover:scale-110'>Log out</button>
       </div>
       </div>

          }
        </div>
    </div>
  )
}

export default Profile