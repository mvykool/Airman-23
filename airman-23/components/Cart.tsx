import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbShoppingCart } from 'react-icons/tb'
import { RiCloseFill } from 'react-icons/ri'
import { TiDeleteOutline } from 'react-icons/ti';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import { motion, AnimatePresence} from 'framer-motion'

/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0, x: 10},
  show: { opacity: 1, x:0,
  transition: {ease: "easeOut", duration: 0.5, delay: 0.1}
  },
  exit: { opacity: 0, x:100,
    transition: {ease: "easeOut", duration: 0.5, delay: 0.1}
    }
} 
  

//import stripe

import getStripe from '../lib/getStripe';



const Cart = () => {
  
  const cartRef = useRef<HTMLDivElement | null>(null);
  const { user, totalPrice, totalQuantities, cartItems, setShowCart, showCart, toggleCartItemQuantity, onRemove } = useStateContext();



  //handle checkout with stripe

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response: any = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();


    stripe.redirectToCheckout({ sessionId: data.id });
  }

  //lock scroll when modal is opened

  if(showCart){
    document.body.style.position = 'fixed'
    document.body.style.overflow = 'hidden'
  }
  
 

  return (
    <>
      <div className='fixed bg-[var(--bg-wrapper)] z-40 w-full md:bg-transparent h-screen top-0' onClick={()=> setShowCart(false)}/> 

<AnimatePresence>
     { showCart && (
         <motion.div 
         variants={sectionVariant}
        initial="hidden"
        animate='show'
        exit={{ opacity: 0 }}
       className=' bg-white pb-10 h-full right-0 z-50  overflow-y-auto top-0 w-60 md:w-[25vw] fixed md:shadow-2xl' ref={cartRef}>
         <button 
         className='m-3'
          type='button'
           onClick={() => setShowCart(false)}
           >
           <RiCloseFill className='h-7 w-7 absolute right-4'/>
           <div className='mt-16'>
           <span className='mx-4 md:ml-16 md:text-base'>Your cart has</span>
           <span className='text-[#00708c] font-semibold '>({totalQuantities} items)</span>
           </div>
         </button>
 
         {cartItems.length < 1 && (
           <div className='mt-5'>
             <TbShoppingCart size={120}  className='flex mx-auto my-10 md:h-20'/>
             <h3 className='font-bold text-sm mb-5 ml-10 md:flex md:justify-center md:ml-0 md:text-base'>No items in your cart yet</h3>
             <Link href="/shop">
               <button
               type='button'
               onClick={() => setShowCart(false)}
               className="flex mx-auto mt-10 py-2 px-4 text-sm bg-[#00708c] text-white font-semibold rounded-md md:px-5 md:py-3 md:text-sm hover:scale-105 duration-200"
               >
                 Continue Shopping
               </button>
             </Link>
           </div>
         )}
 
         <div className='product-container'>
           {cartItems.length >= 1 && cartItems.map((item: any) => (
             <div className='product' key={item._id}>
                 <div className='flex justify-center mx-16 bg-[#00708c] shadow-md rounded-sm my-5'>
                 <img src={urlFor(item.image && item.image[0]).url()} 
               className='h-24 w-24'/>
                 </div>
                 <div className='mx-8'>
                   <div className='flex-top'>
                     <h5 className='text-sm font-semibold my-5' >{item.name}</h5>
                     <h4 className='font-bold'><span className='text-green-600'>$</span>{item.price}</h4>
                   </div> 
 
                   <div className=' mt-2 flex justify-between'>
                        <div>
                        <p className="flex space-x-3 items-center my-5">
                        <span className="text-white bg-black p-1 rounded-sm hover:bg-gray-700 cursor-pointer" onClick={() => toggleCartItemQuantity(item._id, 'dec')} ><AiOutlineMinus /></span>
                        <span className="num">{item.quantity}</span>
                        <span className="text-white bg-black p-1 rounded-sm hover:bg-gray-700 cursor-pointer" onClick={() => toggleCartItemQuantity(item._id, 'inc')} ><AiOutlinePlus /></span>
                       </p>
                        </div>
 
                        <button
                        type='button'
                        className='text-2xl text-red-600 hover:scale-105 duration-200'
                        onClick={() => onRemove(item)}
                        >
                           <TiDeleteOutline/>
                        </button>
                   </div>
 
                 </div>
             </div>
           ))}
         </div>
         {cartItems.length >= 1 && (
           <div className='mx-8'>
              <div >
                <h5 className='text-sm font-semibold my-2'>Subtotal:</h5>
                <h3 className='font-bold'><span className='text-green-600'>$</span>{totalPrice}</h3>
              </div>
              {user ? 
               <div className='btn-container'>
               <button  className="flex mt-10 py-2 px-4 text-sm bg-[#00708c] text-white rounded-md hover:scale-105 duration-200" type='button' onClick={handleCheckout}>
                Pay now
               </button>
             </div> :
             <div>
                <p className='text-sm font-semibold mt-10'>Sign up to buy</p>
                <Link href={'/login'}    onClick={() => setShowCart(false)}>
                <button  className="flex mt-5 py-2 px-4 text-sm bg-[#00708c] text-white rounded-md hover:scale-105 duration-200">Log in</button>
                </Link>
             </div>
              }
           </div>
         )}
       </motion.div>
     )} 
</AnimatePresence>

      </>
  )
}

export default Cart
