import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../lib/client'
import { motion} from 'framer-motion'

/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 0.5, delay: 0.1}
  }
} 
  


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


 

  return (
    <Link href={`/collection/${productData.slug.current}`}>
    <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       className='bg-white rounded-2xl shadow-lg my-4 mx-4 p-5 md:w-[15vw] md:h-[27vh] md:my-10 hover:scale-110 hover:shadow-2xl duration-300 relative overflow-hidden'>
       <div>
       <div className='flex justify-center m-2 '> 
       <Image loader={() => src} src={src} alt='product image' width={400} height={400} className='h-24 md:h-28 w-24 md:w-28'/>
       </div>
         <p className='text-sm md:text-xs md:mt-6 font-semibold mt-4'>{productData.name}</p>
         <p className='my-2 font-bold md:my-4 md:text-lg'><span className='text-xs text-green-600 mx-1'>$</span>{productData.price}</p>
       </div>
     
    </motion.div>
    </Link>
  )
}

export default ProductCol