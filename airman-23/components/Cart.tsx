import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri'
import { TiDeleteOutline } from 'react-icons/ti';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';


//import stripe

import getStripe from '../lib/getStripe';



const Cart = () => {
  
  const cartRef = useRef<HTMLDivElement | null>(null);
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();



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



  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='relative w-56 bg-red-100 h-[100vh]'>
        <button 
        className='m-5'
         type='button'
          onClick={() => setShowCart(false)}
          >
          <RiCloseFill className='h-7 w-7 absolute right-4'/>
          <div className='mt-10'>
          <span className='mx-2'>Your cart</span>
          <span className='text-red-500 font-semibold'>({totalQuantities} items)</span>
          </div>
        </button>

        {cartItems.length < 1 && (
          <div className='mt-5'>
            <AiOutlineShopping size={150}  className='flex mx-auto'/>
            <h3 className='font-bold text-sm mb-5 mx-5'>Your shopping bag is empty</h3>
            <Link href="/">
              <button
              type='button'
              onClick={() => setShowCart(false)}
              className="flex mx-auto mt-10 p-2 bg-red-600 text-white rounded-md"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item: any) => (
            <div className='product' key={item._id}>
              <img src={urlFor(item.image && item.image[0]).url()} 
              className='cart-product-image'/>
                <div className='item-desc'>
                  <div className='flex-top'>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div> 

                  <div className='flex-bottom'>
                       <div>
                       <p className="quantity-desc">
                       <span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec')} ><AiOutlineMinus /></span>
                       <span className="num">{item.quantity}</span>
                       <span className="plus" onClick={() => toggleCartItemQuantity(item._id, 'inc')} ><AiOutlinePlus /></span>
                      </p>
                       </div>

                       <button
                       type='button'
                       className='remove-item'
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
          <div className='cart-bottom'>
             <div className='total'>
               <h3>Subtotal:</h3>
               <h3>${totalPrice}</h3>
             </div>
             <div className='btn-container'>
               <button className='btn' type='button' onClick={handleCheckout}>
                Pay now
               </button>
             </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Cart
