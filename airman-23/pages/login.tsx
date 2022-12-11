import React from 'react'
import Head from 'next/head';
import {auth} from '../firebase'
import { useRouter } from 'next/router';
import { GoogleAuthProvider, signInWithRedirect, signInAnonymously } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {

  //set route

  const router = useRouter()
  const [user] = useAuthState(auth)

//onclick function to access with google

async function googleSignIn  () {

const provider = new GoogleAuthProvider()
signInWithRedirect(auth, provider)

}

/**sign in as guess */

async function signInAsGuess () {
  signInAnonymously(auth)
  router.push('/')
}

if(user) router.push({ pathname: '/' }) 

return (
<>

<div className='bg-app h-screen pt-10'>
<Head>
   <title>IG-CLONE | log in</title>
   
</Head>
     <div className='grid place-items-center p-10 mx-[20%] xl:py-20 xl:px-10 xl:mx-[40%] login-card bg-white mt-36 rounded-md shadow-lg'>
 

       <div className='mt-5 flex-col flex'>
       <button type='button' onClick={googleSignIn}  className='mt-20 cursor-pointer p-3 xl:p-5  bg-black hover:scale-110 transition duration-100 hover:bg-gray-900 rounded-xl text-white text-center'>Login with Google</button>
       <button type='button' onClick={signInAsGuess}  className='mt-10 cursor-pointer p-2 xl:p-4  bg-app hover:scale-110 transition duration-100 hover:bg-gray-200 rounded-xl text-blackz text-center'>Login as demo</button>
  </div>
</div>
  </div>
  
  </>
  )
}


export default Login