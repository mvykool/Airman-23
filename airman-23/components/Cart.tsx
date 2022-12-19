import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbShoppingCart } from 'react-icons/tb'
import { RiCloseFill } from 'react-icons/ri'
import { TiDeleteOutline } from 'react-icons/ti';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';


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
    <div className='absolute bg-[var(--bg-wrapper)] z-40 w-full h-screen top-0' onClick={()=> setShowCart(false)}/> 
      <div className=' bg-white p-2 left-0 z-50 h-[100vh] top-0 w-50 fixed' ref={cartRef}>
        <button 
        className='m-5'
         type='button'
          onClick={() => setShowCart(false)}
          >
          <RiCloseFill className='h-7 w-7 absolute right-4'/>
          <div className='mt-16'>
          <span className='mx-2'>Your cart has</span>
          <span className='text-[#00708c] font-semibold '>({totalQuantities} items)</span>
          </div>
        </button>

        {cartItems.length < 1 && (
          <div className='mt-5'>
            <TbShoppingCart size={120}  className='flex mx-auto my-10'/>
            <h3 className='font-bold text-sm mb-5 mx-5'>No items in your cart yet</h3>
            <Link href="/">
              <button
              type='button'
              onClick={() => setShowCart(false)}
              className="flex mx-auto mt-10 py-2 px-4 text-sm bg-[#00708c] text-white rounded-md"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item: any) => (
            <div className='product' key={item._id}>
                <div className='flex justify-center mx-2 bg-[#00708c] shadow-md rounded-sm my-5'>
                <img src={urlFor(item.image && item.image[0]).url()} 
              className='h-24 w-24'/>
                </div>
                <div className='mx-2'>
                  <div className='flex-top'>
                    <h5 className='text-sm font-semibold my-5' >{item.name}</h5>
                    <h4 className='font-bold'><span className='text-green-600'>$</span>{item.price}</h4>
                  </div> 

                  <div className=' mt-2 flex justify-between mx-2'>
                       <div>
                       <p className="flex space-x-3 items-center my-5">
                       <span className="text-white bg-black p-1 rounded-sm" onClick={() => toggleCartItemQuantity(item._id, 'dec')} ><AiOutlineMinus /></span>
                       <span className="num">{item.quantity}</span>
                       <span className="text-white bg-black p-1 rounded-sm" onClick={() => toggleCartItemQuantity(item._id, 'inc')} ><AiOutlinePlus /></span>
                      </p>
                       </div>

                       <button
                       type='button'
                       className='text-2xl text-red-600'
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
          <div className='mx-2'>
             <div >
               <h5 className='text-sm font-semibold my-2'>Subtotal:</h5>
               <h3 className='font-bold'><span className='text-green-600'>$</span>{totalPrice}</h3>
             </div>
             {user ? 
              <div className='btn-container'>
              <button  className="flex mt-10 py-2 px-4 text-sm bg-[#00708c] text-white rounded-md" type='button' onClick={handleCheckout}>
               Pay now
              </button>
            </div> :
            <div>
               <p className='text-sm font-semibold mt-10'>Sign up to buy</p>
               <Link href={'/login'}    onClick={() => setShowCart(false)}>
               <button  className="flex mt-5 py-2 px-4 text-sm bg-[#00708c] text-white rounded-md">Log in</button>
               </Link>
            </div>
             }
          </div>
        )}
      </div>

      </>
  )
}

export default Cart
