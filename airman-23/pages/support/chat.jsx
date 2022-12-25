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
    const scroll = useRef();

 
    useEffect(() => {
        const q  = query(collection(db, 'messages'), orderBy("timestamp"))
        const unsubcribe = onSnapshot(q, (querySnapshot) => {
          let messages = []
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
  <div className='pt-10 justify-end bg-gray-200  flex flex-center flex-col'>

    <Head>
      <title>Air man 23 | Support</title>
    </Head>   

    <div className='my-6 bg-white shadow-md rounded-full h-10 w-10 flex justify-center items-center ml-8'>
      <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
    </div>
 
    <div className='mx-2 bg-white h-[55vh] rounded-md relative overflow-scroll'>
    <div className='flex justify-center mb-5 bg-[#00708c] py-4 rounded-t-md'>
      <h1 className='font-bold text-white text-lg'>Welcome to Airman-23 suppport</h1>
    </div>

        {/**chat messange */}
        {messages && messages.map((message) => (
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