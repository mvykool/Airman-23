import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { urlFor } from '../lib/client'

interface Product{
    product: any
    image: any
    name: string
    price: number
    slug: string
}

const Product = ({ product} : Product) => {

    const src = urlFor(product.image && product.image[0]).url()


  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className='product-card'>
        <Image loader={() => src} src={src} alt='product image' width={20} height={20}/>

          <p className='product-name'>{product.name}</p>
          <p className='product-price'>${product.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product