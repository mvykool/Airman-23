import Link from 'next/link'
import React from 'react'
import BlogCard from './BlogCard'

const BlogBanner = ({posts}: any) => {
  return (
    <div >
    <div className='bg-[#00708C] md:w-[50VW]  mx-8 my-14 p-5 rounded-lg'>
    <div className='flex justify-center m-3'>
      <h1 className='font-bold text-white text-lg'>What's new in the blog?</h1>
    </div>
    </div>  
    

    <div className='mx-8 md:flex md:space-x-4 md:justify-evenly'>
        {posts.slice(0,2).map((post: any) => (
          <div key={post._id}>
            <BlogCard post={post}/>
          </div>
        ))}
    </div>
    
    <div className='my-8 md:my-5'>
      <Link className='ml-9 md:ml-16 font-semibold underline text-gray-600' href={'/blog/posts'} >Read more</Link>
    </div>
  </div>
  )
}

export default BlogBanner