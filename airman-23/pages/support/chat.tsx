import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect, useRef} from 'react'
import { db } from '../../firebase';
import Message from '../../components/Message';
import SendMessage from '../../components/SendMessage';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const Chat = () => {
 
    const [messages, setMessages] = useState([]);
    const scroll = useRef<HTMLFormElement>(null);

 
    useEffect(() => {
        const q  = query(collection(db, 'messages'), orderBy("timestamp"))
        const unsubcribe = onSnapshot(q, (querySnapshot) => {
          let messages: any = []
          querySnapshot.forEach((doc) => {
              messages.push({...doc.data(), id: doc.id})
          })
          setMessages(messages)
        })
        return () => unsubcribe()
      }, [])
  
        //go back

  const router = useRouter()

  const goBack = () => {
    router.back()
  }




  return (
  <div className='pt-10 justify-end bg-gray-200  flex flex-center flex-col w-screen'>

    <Head>
      <title>Air man 23 | Support</title>
    </Head>   

   
    <div className='my-10 md:mt-20 bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 flex justify-center items-center ml-8' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div> 

      
    <div className='mx-2 bg-white h-[55vh] rounded-md relative overflow-y-scroll md:h-[65vh] md:w-[60vw] md:ml-[15%] md:mt-20'>
    <div className='flex justify-center mb-5 bg-[#00708c] py-4 rounded-t-md'>
      <h1 className='font-bold text-white text-lg'>Welcome to Airman-23 suppport</h1>
    </div>

        {/**chat messange */}
        {messages && messages.map((message: any) => (
            <Message  key={message.id} message={message} />
        ))}
        
    </div>

    {/**send message */}
    <SendMessage scroll={scroll} />
    <span ref={scroll}>
    </span>
  </div>
  )
}

export default Chat