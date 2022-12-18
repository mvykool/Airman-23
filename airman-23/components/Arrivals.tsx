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

      <Link href={`/collection/${items[0].slug.current}`} className='a bg-white rounded-sm shadow-lg' >
      <img src={urlFor(items[0].image[0]).url()} alt="" />
      </Link>

      <Link href={`/collection/${items[1].slug.current}`} className='bg-white rounded-sm shadow-lg b' >
      <img src={urlFor(items[1].image[0]).url()} alt=""  />
      </Link>

      <Link href={`/collection/${items[2].slug.current}`} className='bg-white rounded-sm shadow-lgc' >
      <img src={urlFor(items[2].image[0]).url()} alt=""/>
      </Link>
       
      <Link href={`/collection/${items[3].slug.current}`} className='bg-white rounded-sm shadow-lgd' >
      <img src={urlFor(items[3].image[0]).url()} alt=""  />
      </Link>

      <Link href={`/collection/${items[4].slug.current}`} className='bg-white rounded-sm shadow-lg e' >
      <img src={urlFor(items[4].image[0]).url()} alt="" />
      </Link>

      </div>

      {/**grid two */}

      <div className='homeGridTwo mt-2'>
      <Link href={`/collection/${items[5].slug.current}`} className='bg-white rounded-sm shadow-lg f' >
      <img src={urlFor(items[5].image[0]).url()} alt="" />
      </Link>

      <Link href={`/collection/${items[6].slug.current}`} className='bg-white rounded-sm shadow-lgg' >
      <img src={urlFor(items[6].image[0]).url()} alt=""  />
      </Link>

      <Link href={`/collection/${items[7].slug.current}`} className='bg-white rounded-sm shadow-lg h' >
      <img src={urlFor(items[7].image[0]).url()} alt=""/>
      </Link>
       
      <Link href={`/collection/${items[8].slug.current}`} className='bg-white rounded-sm shadow-lg i' >
      <img src={urlFor(items[8].image[0]).url()} alt=""  />
      </Link>

      <Link href={`/collection/${items[9].slug.current}`} className='bg-white rounded-sm shadow-lg j' >
      <img src={urlFor(items[9].image[0]).url()} alt="" />
      </Link>
      </div>
    </div>
  )
}

export default Arrivals