import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'
import Image from 'next/image'

interface Props{
    post: any
}

const BlogCard = ({post}: Props) => {
  return (
    <div className='py-10'>
    <Link href={`/blog/${post.slug.current}`} className='my-2 relative'>
      
      <p className=' p-4 font-bold absolute text-white bg-[var(--bg-wrapper)] w-full h-full rounded-md'>{post.title}</p>

       <Image
        width={200}
        height={200}
        alt='blog-pic'
        src={urlFor(post.mainImage.asset).url()}
        className='h-52 w-52 rounded-md'
        /> 
     <button className='text-xs font-semibold bg-white absolute -mt-14 ml-3 p-2 rounded-xl'>Read more</button>

    </Link>


  </div>
  )
}

export default BlogCard