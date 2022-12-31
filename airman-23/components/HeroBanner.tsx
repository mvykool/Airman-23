import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'
import { motion} from 'framer-motion'

/**framer motion variants */

const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.5}
  }
}


interface Props{
    heroBanner: any  
}

const HeroBanner = ({heroBanner}: Props) => {
  return (
    <>
    <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
    className='mx-5 bg-orange-400 rounded-sm my-10 md:w-[22vw] hover:scale-105 duration-300 hover:bg-orange-500 hover:shadow-md'>
        <div className='md:px-5'>
            <div className='flex justify-between mx-5 pt-2'>
          <div className='mt-5'>
            <img src={urlFor(heroBanner.image).url()} alt="img" className='h-28 md:h-32 mt-10' />
          </div>

            <div className='mt-5'>
             <h3 className='text-sm md:text-lg flex justify-center text-white'>{heroBanner.midText}</h3>
             <h1 className='text-lg flex justify-center font-bold text-black'>{heroBanner.largeText1}</h1>


           <div className='ml-14 mb-6 mt-7 md:mt-8 line'>
            <p className='text-gray-600 ml-3 line-through'>${heroBanner.discount}</p>
           <p className='text-white text-xl md:text-2xl'>${heroBanner.largeText2}!</p>
           </div>

           <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button className='ml-10 -mt-10 md:mt-2 mb-5 p-2 bg-black text-white rounded-sm' type='button'>{heroBanner.buttonText}</button>
          </Link>
         
        </div>
            </div>
       
       
            </div>

      </div>
    </motion.div>
    </>
  )
}

export default HeroBanner