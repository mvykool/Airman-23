import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'
import Image from 'next/image'

interface Props{
    post: any
}

const BlogCard = ({post}: Props) => {
  return (
    <div className='py-2 md:mx-4'>
    <div className='my-2 md:my-8 relative md:w-[24vw]'>
      
      <p className=' p-4 font-bold absolute text-white bg-[var(--bg-blog)] w-full h-full rounded-md'>{post.title}</p>

       <Image
        width={500}
        height={500}
        alt='blog-pic'
        src={urlFor(post.mainImage.asset).url()}
        className='h-52 md:h-60 w-full rounded-md'
        /> 
     <Link href={`/blog/${post.slug.current}`}  className='text-xs font-semibold bg-white absolute -mt-14 ml-3 p-2 rounded-xl'>Read more</Link>

    </div>


  </div>
  )
}

export default BlogCard