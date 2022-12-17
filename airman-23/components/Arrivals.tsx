import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client'





interface Product{
    products: any
  
}

const Arrivals = ({ products} : Product) => {
    

    const items = products;


  return (
    <div>

      {/** first collection */}  
     <div  className='homeGrid mt-2'>

      <div className='border-2 border-black a' >
      <img src={urlFor(items[0].image[0]).url()} alt="" />
      </div>

      <div className='border-2 border-black b' >
      <img src={urlFor(items[1].image[0]).url()} alt=""  />
      </div>

      <div className='border-2 border-black c' >
      <img src={urlFor(items[2].image[0]).url()} alt=""/>
      </div>
       
      <div className='border-2 border-black ] d' >
      <img src={urlFor(items[3].image[0]).url()} alt=""  />
      </div>

      <div className='border-2 border-black e' >
      <img src={urlFor(items[4].image[0]).url()} alt="" />
      </div>

      </div>

      {/**grid two */}

      <div className='homeGridTwo mt-2'>
      <div className='border-2 border-black f' >
      <img src={urlFor(items[5].image[0]).url()} alt="" />
      </div>

      <div className='border-2 border-black g' >
      <img src={urlFor(items[6].image[0]).url()} alt=""  />
      </div>

      <div className='border-2 border-black h' >
      <img src={urlFor(items[7].image[0]).url()} alt=""/>
      </div>
       
      <div className='border-2 border-black ] i' >
      <img src={urlFor(items[8].image[0]).url()} alt=""  />
      </div>

      <div className='border-2 border-black j' >
      <img src={urlFor(items[9].image[0]).url()} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Arrivals