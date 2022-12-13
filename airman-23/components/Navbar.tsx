import React, { useState} from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';
import Profile from './Profile';
import { useRouter } from 'next/router';


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


  //to login

  const toLogin = () => {
    router.push("/login")
  }

  //use context
 const {showCart, setShowCart, totalQuantities, user, profile, setProfile } = useStateContext();

  return (
      <div className='flex h-14 justify-around bg-white w-full items-center fixed top-0'>
         {/**Logo */}

         <div className='mx-2'>
            <h3>AM-23</h3>
        </div>
       
       {/**search bar */}

       <div >
         <form onSubmit={handleSearch} autoComplete="off">
         <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search..' className='border-b-2 focus:outline-none w-48' />
         </form>
       </div>

       {/**menu */}

        {/**profile pic, & cart */}

      {user ?
      <img 
      onClick={() => setProfile(true)}
      className='h-8 border-2 border-red-500 rounded-full' 
       src={user.photoURL ? user.photoURL
        : "https://cdn-icons-png.flaticon.com/512/6073/6073873.png" } 
        alt="profile pic" />: 
         (<button onClick={toLogin}
          className='border-2 p-2 rounded-md'>Log In</button>)}

       {profile && <Profile/>}   
      

       <button type='button' className='h-6 w-6' onClick={() => setShowCart(true)}>
         <RiShoppingCartLine className='h-5 w-5'/>
         <span className='absolute text-xs -mt-6 bg-red-500 rounded-full w-4 h-4 text-white'>{totalQuantities}</span>
      </button>

     
      {showCart && <Cart/>}

      </div>
  )
  
}

export default Navbar