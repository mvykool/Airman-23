import React, { createContext, useContext, useState, useRef } from "react";
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { createOrGetUser } from "../utils";
import axios from 'axios'


const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
     const [openMenu, setOpenMenu] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);


    let foundProduct;
    let index;

    //uiser and chat state

    const [userChat, setUserChat] = useState(null)
    const [chat, setChat] = useState(null)
 
 
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
 
   
    const form = useRef()
 
    //chat engine API
 
    function getOrCreateUser(callback ){
     axios.put(
       'https://api.chatengine.io/users/',
       {
         
           "username": name,
           "secret": email,
       },
       {headers: {'Private-Key': 'e506bd15-bfd3-4664-93dd-3928faac9653'}}
 
     )
     .then(r => callback(r.data))
     .catch(error => {
       // handle the error here
       console.log(error)
     })
    }
 
 
    function getOrCreateChat(callback){
     axios.put(
       'https://api.chatengine.io/chats/',
       {
         
           "username": ['Maicol Hernandez', name],
           "is_direct_chat": true
       },
       {headers: {'Private-Key': 'e506bd15-bfd3-4664-93dd-3928faac9653'}}
 
     )
     .then(r => callback(r.data))
     .catch(error => {
       // handle the error here
       console.log(error)
     })
    }
 
    //handleSubmit
 
   function handleSubmit(e) {
     e.preventDefault();
 
     getOrCreateUser(
       user => {
         setUserChat(user)
         getOrCreateChat(
           chat => setChat(chat)
         )
       }
     )
 
      form.current.reset(); 
   }  



  //user
  
  const [user] = useAuthState(auth)

  

  if(user){
    createOrGetUser(user)
  }


 //create function for increase and decrease

 const incQty = () => {
    setQty((prevQty) => prevQty + 1);
 }

 const decQty = () => {
    setQty((prevQty) => {
        if(prevQty -1 < 1) return 1;

        return prevQty - 1;
    });
 }

 // increase or decrease in the cart

 const toggleCartItemQuantity = (id, value ) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);

    const newCartItems = cartItems;


    if(value === 'inc'){
        newCartItems.map((item) => (item._id === id) && (item.quantity = foundProduct.quantity + 1));
        setCartItems([...newCartItems])
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)

    } else if(value === 'dec'){
         
        if(foundProduct.quantity > 1){
        
        newCartItems.map((item) => (item._id === id) && (item.quantity = foundProduct.quantity - 1)); 
        setCartItems([...newCartItems])
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
        }
    }
 }


 //function to add to the cart

 const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if(checkProductInCart){
       const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
                ...cartProduct,
                quantity: cartProduct.quantity + quantity
            }
        })

        setCartItems(updatedCartItems);
    } else {
        product.quantity = quantity;

        setCartItems([...cartItems, { ...product }]);
    }

 }


 //remove item from cart 

 const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);

    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);

    setCartItems(newCartItems);
 }

    return(
        <Context.Provider
        value={{
            showCart, 
            cartItems,
            openMenu,
            setOpenMenu, 
            totalPrice,
             totalQuantities,
             qty,
             incQty,
             decQty,
             onAdd,
             setShowCart,
             toggleCartItemQuantity,
             onRemove,
             user,
             setEmail,
             setName,
             handleSubmit,
             form
        }}
        >
            {children}
        </Context.Provider>
    )
}

//function to export context

export const useStateContext = () => useContext(Context);