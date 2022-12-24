import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useStateContext } from '../context/StateContext';

import { urlFor } from '../lib/client'



interface Product{
    product: any
    image: any
    name: string
    price: number
    slug: any

}

const Product = ({ product} : Product) => {
    
    const [productData, setProduct] = useState(product)
    const src = urlFor(productData.image && productData.image[0]).url()

    const { user } = useStateContext();




  return (
    <div className='bg-white rounded-2xl shadow-lg my-4 mx-4 p-5'>
      <Link href={`/product/${productData.slug.current}`}>
        <div>
        <div className='flex justify-center m-2'> 
        <Image loader={() => src} src={src} alt='product image' width={40} height={40} className='h-24 w-24'/>
        </div>
          <p className='text-sm font-semibold mt-4'>{productData.name}</p>
          <p className='my-2 font-bold'><span className='text-xs text-green-600 mx-1'>$</span>{productData.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product