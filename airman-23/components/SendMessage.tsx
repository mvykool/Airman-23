import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, {useState, useRef} from 'react'
import { auth, db } from '../firebase'
import {HiPaperAirplane} from 'react-icons/hi'


interface Props{
  scroll: any
}

const SendMessage = ({scroll}: Props) => {

const [input, setInput] = useState("")


const form = useRef<HTMLFormElement>(null);

const sendMessage = async (e: any) => {
    e.preventDefault()
    const {uid, displayName, photoURL } = auth.currentUser!;
    setInput('')
    if(input === ""){
        alert("Please enter a valid message")
        return
    }

  
    await addDoc(collection(db, 'messages'), {
        text: input,
        image: photoURL ? photoURL : "https://cdn-icons-png.flaticon.com/512/6073/6073873.png",
        name: displayName ? displayName : 'userDemo',
        uid,
        timestamp: serverTimestamp()
    })
  
   scroll.current.scrollView({behavior: 'smooth'})
  
 }

  return (
    <form ref={form} onSubmit={sendMessage} className='mt-1 md:w-[60vw] md:ml-[15%] md:mr-20 mb-14 flex justify-center items-center'>
        <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className='p-2 my-2 w-full ml-2 rounded-sm outline-none' 
        type="text"
        placeholder='send message' />
        <button className='text-white mr-2 bg-green-500 py-3 px-4 rounded-sm' type='submit' >
          <HiPaperAirplane className='rotate-45 text-xl'/>
          </button>  
    </form>
  )
}

export default SendMessage