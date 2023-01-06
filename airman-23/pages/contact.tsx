import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { motion} from 'framer-motion'

/**framer motion variants */

const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.5}
  }
}

 
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
}, 4500);

   //go back

  const router = useRouter()

  const goBack = () => {
    router.back()
  }

 

  return (
    <div className='pt-10 bg-gradient  pb-10 w-screen'>

    <Head>
      <title>Air man 23 | Contact</title>
      <meta name="theme-color" content="#00708c" />

    </Head>   

    <div className='mt-10  bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 flex justify-center items-center ml-8 hover:scale-125 duration-300 cursor-pointer' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div>

   <div className='md:flex md:justify-center md:mr-[20%]'>
   <div className='flex justify-center mx-8 p-5 rounded-lg mt-10 md:mt-8 md:p-3 mb-5 bg-white md:w-[50vw]'>
      <h1 className='font-bold text-[#00708c] text-2xl md:text-xl'>Contact us</h1>
      </div>

   </div>


    <div className='flex flex-col mx-8 justify-center md:flex md:justify-center'>  
    <div>
      {result ? 
      <div className='absolute bg-[var(--bg-wrapper)] z-40 w-full h-full top-0 left-0 flex justify-center items-center'>
        <div className='mx-4 md:w-[30vw] md:py-20 top-40 flex flex-col bg-white rounded-md p-8 fixed text-green-500 font-semibold'>
         <p className='md:flex md:justify-center text-sm'>Your message has been successfully sent.</p> 
         <hr className='w-full my-4'/>
        <h3 className='md:flex md:justify-center text-sm' >I will be reaching you back within 24-48</h3>

        </div>
      </div> 
      : null}
    </div> 

      <motion.div
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='md:flex md:justify-center md:mr-[20%]'>
      <form ref={form} className='flex flex-col justify-center p-3 my-2 md:w-[35vw]' onSubmit={sendEmail}>
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
          <button className='my-5 rounded-md cursor-pointer bg-black text-white font-bold p-1 hover:bg-gray-800 hover:scale-105 duration-300' type='submit'  value='send'>Submit</button>
    </form>
      </motion.div>

   </div>
</div>
  )
}

export default contact

