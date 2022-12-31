import React, { useState } from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { motion} from 'framer-motion'



/**framer motion variants */

const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.5}
  }
}

const textVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.1}
  }
}


interface Product{
    products: any
  
}

const Arrivals = ({ products} : Product) => {
    

    const items = products;


  return (
    <div className='my-10 md:w-[70vw]'>

      {/** first collection */}  
     <div  className='homeGrid mt-2'>

      <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='a md:w-[97%] bg-white rounded-sm shadow-lg flex items-center duration-150 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-300'>
      <Link href={`/collection/${items[0].slug.current}`}  >
      <img src={urlFor(items[0].image[0]).url()} alt="" />
      </Link>
      </motion.div>

      

      <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='bg-white md:-ml-3  rounded-sm shadow-lg b flex items-center duration-150   hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-300'
      >
      <Link href={`/collection/${items[1].slug.current}`}  >
      <img  src={urlFor(items[1].image[0]).url()} alt=""  />
      </Link>
      </motion.div>



      <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='bg-white  rounded-sm shadow-lg c flex items-center duration-150   hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-300'
      >
      <Link href={`/collection/${items[2].slug.current}`}  >
      <img  src={urlFor(items[2].image[0]).url()} alt=""  />
      </Link>
      </motion.div>


      <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='bg-white md:-ml-3  rounded-sm shadow-lg d flex items-center duration-150   hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-300'
      >
      <Link href={`/collection/${items[3].slug.current}`}  >
      <img  src={urlFor(items[3].image[0]).url()} alt=""  />
      </Link>
      </motion.div>

      <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='bg-white  rounded-sm shadow-lg e flex items-center duration-150   hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-300'
      >
      <Link href={`/collection/${items[4].slug.current}`}  >
      <img  src={urlFor(items[4].image[0]).url()} alt=""  />
      </Link>
      </motion.div>

      <motion.div 
        variants={textVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='hidden md:flex md:justify-center md:items-center md:mt-40'>
        <h3 className='r border-b-4 px-2 border-[#00708c] text-4xl arrival-text logo-font'>Latest</h3>
      </motion.div>

      </div>

      {/**grid two */}

      <div className='homeGridTwo mt-2 md:ml-[1%]'>

       <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='bg-white  rounded-sm shadow-lg f flex items-center duration-150   hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-300'
      >
      <Link href={`/collection/${items[5].slug.current}`}  >
      <img  src={urlFor(items[5].image[0]).url()} alt=""  />
      </Link>
      </motion.div>

      <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='bg-white  rounded-sm shadow-lg g flex items-center duration-150   hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-300'
      >
      <Link href={`/collection/${items[6].slug.current}`}  >
      <img  src={urlFor(items[6].image[0]).url()} alt=""  />
      </Link>
      </motion.div>


      <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='bg-white  rounded-sm shadow-lg h flex items-center duration-150   hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-300'
      >
      <Link href={`/collection/${items[7].slug.current}`}  >
      <img  src={urlFor(items[7].image[0]).url()} alt=""  />
      </Link>
      </motion.div>
       
      <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='bg-white  rounded-sm shadow-lg i flex items-center duration-150   hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-300'
      >
      <Link href={`/collection/${items[8].slug.current}`}  >
      <img  src={urlFor(items[8].image[0]).url()} alt=""  />
      </Link>
      </motion.div>

      <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='bg-white  rounded-sm shadow-lg j flex items-center duration-150   hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-300'
      >
      <Link href={`/collection/${items[9].slug.current}`}  >
      <img  src={urlFor(items[9].image[0]).url()} alt=""  />
      </Link>
      </motion.div>

      <motion.div 
        variants={textVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='hidden md:flex md:justify-center md:items-center md:mt-40'>
        <h3 className='r border-b-4 px-2 border-[#00708c] text-4xl arrival-text logo-font'>Releases</h3>
      </motion.div>


      </div>

    </div>
  )
}

export default Arrivals