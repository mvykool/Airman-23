import React from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';

const Navbar = () => {


 const {showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div>
      <div className='flex h-10 justify-around items-center'>
         {/**Logo */}

         <div>
            <h3>23</h3>
        </div>
       
       {/**search bar */}

       <div>
         <input type="text" placeholder='Search..' />
       </div>

       {/**menu */}

       <button type='button' className='h-6 w-6' onClick={() => setShowCart(true)}>
         <RiShoppingCartLine className='h-5 w-5'/>
         <span className='absolute text-xs -mt-6 ml-1 bg-red-500 rounded-full w-4 h-4 text-white'>{totalQuantities}</span>
      </button>

      {showCart && <Cart/>}

      </div>
    </div>
  )
}

export default Navbar