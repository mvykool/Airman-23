import React from 'react'
import { auth } from '../firebase'



const Message = ({message}) => {
 
  const messageClass = message.uid === auth.currentUser.uid
  ? `send`
  : `received`


  return (
    <div className='px-4 py-5'>
       <div className='flex items-center'>
          <div className='relative'>
          <img src={message.image} className='h-10 w-10 ml-2' alt='pic' />
          <span className='h-4 w-4 bg-green-400 absolute rounded-full -mt-10 ml-8'></span>
          </div>

       <p className='text-gray-500 text-sm p-2'>{message.name}:</p>
       </div>

        <div className={`message ${messageClass} w-56 rounded-3xl text-white`}>
            <p className='pl-4'>{message.text}</p>
        </div>
    </div>
  )
}

export default Message