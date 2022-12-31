import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'
import Image from 'next/image'
import { motion} from 'framer-motion'

/**framer motion variants */

const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.4}
  }
}


interface Props{
    post: any
}

const BlogCard = ({post}: Props) => {
  return (
    <div className='py-2 md:mx-4'>
    <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
    className='my-2 md:my-8 relative md:w-[24vw] hover:scale-110 duration-300'>
      
      <p
       className=' p-4 font-bold absolute text-white bg-[var(--bg-blog)] w-full h-full rounded-md hover:bg-[var(--bg-blog-hover)] duration-300'>{post.title}</p>

       <Image
        width={500}
        height={500}
        alt='blog-pic'
        src={urlFor(post.mainImage.asset).url()}
        className='h-52 md:h-60 w-full rounded-md'
        /> 
     <Link href={`/blog/${post.slug.current}`}  className='text-xs font-semibold bg-white absolute -mt-14 ml-3 p-2 rounded-xl duration-200 hover:bg-black hover:text-white'>Read more</Link>

    </motion.div>


  </div>
  )
}

export default BlogCard