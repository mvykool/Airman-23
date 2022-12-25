import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, {useState, useRef} from 'react'
import { auth, db } from '../firebase'

const SendMessage = ({scroll}) => {

const [input, setInput] = useState("")


const form = useRef();

const sendMessage = async (e) => {
    e.preventDefault()
    const {uid, displayName, photoURL } = auth.currentUser 
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
    <form ref={form} onSubmit={sendMessage} className='mt-1 flex justify-center items-center'>
        <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className='p-2 my-2 rounded-sm outline-none' 
        type="text"
        placeholder='send message' />
        <button className='text-white bg-green-500 p-2 rounded-sm' type='submit' >send</button>  
    </form>
  )
}

export default SendMessage