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

const ProductCol = ({ product} : Product) => {
    
    const [productData, setProduct] = useState(product)
    const src = urlFor(productData.image && productData.image[0]).url()

    const { user } = useStateContext();



  return (
    <div className='bg-white rounded-2xl shadow-lg my-4 mx-4 p-5'>
      <Link href={`/collection/${productData.slug.current}`}>
        <div>
        <div className='flex justify-center m-2'> 
        <Image loader={() => src} src={src} alt='product image' width={24} height={24} className='h-24 w-24'/>
        </div>
          <p className='text-sm font-semibold mt-4'>{productData.name}</p>
          <p className='my-2 font-bold'><span className='text-xs text-green-600 mx-1'>$</span>{productData.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCol