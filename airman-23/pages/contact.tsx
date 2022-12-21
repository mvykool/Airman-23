import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import { MdOutlineKeyboardBackspace } from 'react-icons/md'



const contact = () => {
 
  //email js

  const [result, setResult] = useState(false)

  const form = useRef<HTMLFormElement>(null);



  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  
    if (form.current) {
      emailjs.sendForm('service_li998zs', 'template_owr2bld', form.current, 'YznX3U0AWopqVewR_')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

      form.current!.reset(); // Reset the form
      setResult(true)
};

//hide result

setTimeout(() => {
  setResult(false)
}, 4000);

 

   //go back

  const router = useRouter()

  const goBack = () => {
    router.back()
  }



  return (
    <div className='pt-10 bg-gradient pb-10'>

    <Head>
      <title>Air man 23 | Contact</title>
    </Head>   

    <div className='mt-10 bg-white shadow-md rounded-full h-10 w-10 flex justify-center items-center ml-8'>
      <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
    </div>

    <div className='flex justify-center mx-8 p-5 rounded-lg mt-10 mb-5 bg-white'>
      <h1 className='font-bold text-[#00708c] text-2xl'>Contact us</h1>
      </div>

    <div className='flex flex-col mx-8 justify-center'>  
    <div>
      {result ? 
      <div className='absolute bg-[var(--bg-wrapper)] z-40 w-full h-screen top-0 left-0 flex justify-center items-center'>
        <div className='mx-4 flex flex-col bg-white rounded-md p-8 fixed text-green-500 font-semibold'>
         <p>Your message has been successfully sent.</p> 
         <hr className='w-full my-4'/>
        <h3>I will be reaching you back within 24-48</h3>

        </div>
      </div> 
      : null}
    </div>
    <form ref={form} className='flex flex-col justify-center p-3 my-2' onSubmit={sendEmail}>
          <label className='bg-black w-20 font-semibold rounded-md flex justify-center p-1 my-4 text-white'>Name</label>
          <input
          type="text"
          name='name'
          id='name'
          placeholder='Your Name'
          className='p-2 rounded-md outline-none'/>
          <label className='bg-black w-20 font-semibold rounded-md flex justify-center p-1 my-4 text-white'>Email</label>
          <input
          type="text"
         
          name='email'
          id='email'
          placeholder='Email Address'
          className='p-2 rounded-md outline-none'/>
          <label className='bg-black w-20 font-semibold rounded-md flex justify-center p-1 my-4 text-white'>Message</label>
          <input
          type="text"
          name='message'
          id='message'
          placeholder='Message' 
          className='px-2 pt-2 pb-36 rounded-md outline-none'/>
          <button className='my-5 rounded-md cursor-pointer bg-black text-white font-bold p-1' type='submit'  value='send'>Submit</button>
    </form>
   </div>
</div>
  )
}

export default contact

