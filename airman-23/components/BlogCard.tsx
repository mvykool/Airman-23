import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'
import Image from 'next/image'

interface Props{
    post: any
}

const BlogCard = ({post}: Props) => {
  return (
    <div>
    <Link href={`/blog/${post.slug.current}`}>
      <div>
      <p className='font-bold absolute text-white'>{post.title}</p>

       <Image
        width={150}
        height={150}
        alt='blog-pic'
        src={urlFor(post.mainImage.asset).url()}
        className='h-52 w-52'
        /> 
      </div>
    </Link>

  </div>
  )
}

export default BlogCard