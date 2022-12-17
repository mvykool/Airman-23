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


    console.log(productData)

  return (
    <div className='bg-gray-200 rounded-2xl shadow-lg my-4 mx-2 p-5'>
      <Link href={`/product/${productData.slug.current}`}>
        <div>
        <Image loader={() => src} src={src} alt='product image' width={24} height={24} className='h-24 w-24'/>

          <p className='text-xs font-semibold mt-2'>{productData.name}</p>
          <p className='my-2'><span className='text-xs'>$</span>{productData.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product