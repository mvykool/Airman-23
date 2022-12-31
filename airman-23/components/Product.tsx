import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion} from 'framer-motion'

/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.7}
  }
}
 

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





  return (
    <Link href={`/product/${productData.slug.current}`}>

    <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
    className='bg-white rounded-2xl shadow-lg my-4 mx-4 p-5 md:w-[18vw] md:my-20 hover:scale-110 hover:shadow-2xl duration-300'>
        <div>
        <div className='flex justify-center m-2'> 
        <Image loader={() => src} src={src} alt='product image' width={400} height={400} className='h-24 md:h-32 w-24 md:w-32'/>
        </div>
          <p className='text-sm md:text-base md:mt-6 font-semibold mt-4'>{productData.name}</p>
          <p className='my-2 font-bold md:my-4 md:text-lg'><span className='text-xs text-green-600 mx-1'>$</span>{productData.price}</p>
        </div>
    </motion.div>
    </Link>

  )
}

export default Product