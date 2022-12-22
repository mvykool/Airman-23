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

<div className='bg-gray-200 pt-10 pb-44 login'>
      <Head>
        <title>Air man 23 | Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div className='grid place-items-center py-14 px-10 mx-[20%] xl:py-10 xl:px-10 xl:mx-[40%] login-card bg-white mt-36 rounded-md shadow-lg'>

      <h1 className='font-bold text-xl text-[#00708c]'>Airman-23</h1>

       <div className='flex-col flex'>
       <button type='button' onClick={googleSignIn}  className='mt-10 cursor-pointer p-3 xl:p-5  bg-[#00708c] hover:scale-110 transition duration-100 hover:bg-gray-900 rounded-xl text-white font-semibold text-center'>Login with Google</button>
       <button type='button' onClick={signInAsGuess}  className='mt-10 cursor-pointer p-2 xl:p-4  bg-app hover:scale-110 transition duration-100 hover:bg-gray-200 rounded-xl text-[#00708c] border-2 border-[#00708c] text-center font-semibold'>Login as demo</button>

  </div>
</div>
  </div>
  
  </>
  )
}


export default Login