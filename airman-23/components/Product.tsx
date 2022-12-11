import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { urlFor } from '../lib/client'

interface Product{
    product: any
    image: any
    name: string
    price: number
    slug: any
}

const Product = ({ product} : Product) => {

    const src = urlFor(product.image && product.image[0]).url()


  return (
    <div className='bg-gray-200 rounded-2xl shadow-lg my-4 mx-2 p-5'>
      <Link href={`/product/${product.slug.current}`}>
        <div>
        <Image loader={() => src} src={src} alt='product image' width={24} height={24} className='h-24 w-24'/>

          <p className='text-xs font-semibold mt-2'>{product.name}</p>
          <p className='my-2'><span className='text-xs'>$</span>{product.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product