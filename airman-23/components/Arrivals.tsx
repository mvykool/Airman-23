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
    <div className='my-10'>

      {/** first collection */}  
     <div  className='homeGrid mt-2'>

      <div className='a bg-white rounded-md shadow-lg' >
      <img src={urlFor(items[0].image[0]).url()} alt="" />
      </div>

      <div className='bg-white rounded-md shadow-lg b' >
      <img src={urlFor(items[1].image[0]).url()} alt=""  />
      </div>

      <div className='bg-white rounded-md shadow-lgc' >
      <img src={urlFor(items[2].image[0]).url()} alt=""/>
      </div>
       
      <div className='bg-white rounded-md shadow-lgd' >
      <img src={urlFor(items[3].image[0]).url()} alt=""  />
      </div>

      <div className='border-2 bg-white rounded-md shadow-lg e' >
      <img src={urlFor(items[4].image[0]).url()} alt="" />
      </div>

      </div>

      {/**grid two */}

      <div className='homeGridTwo mt-2'>
      <div className='bg-white rounded-md shadow-lg f' >
      <img src={urlFor(items[5].image[0]).url()} alt="" />
      </div>

      <div className='bg-white rounded-md shadow-lgg' >
      <img src={urlFor(items[6].image[0]).url()} alt=""  />
      </div>

      <div className='bg-white rounded-md shadow-lg h' >
      <img src={urlFor(items[7].image[0]).url()} alt=""/>
      </div>
       
      <div className='bg-white rounded-md shadow-lg i' >
      <img src={urlFor(items[8].image[0]).url()} alt=""  />
      </div>

      <div className='bg-white rounded-md shadow-lg j' >
      <img src={urlFor(items[9].image[0]).url()} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Arrivals