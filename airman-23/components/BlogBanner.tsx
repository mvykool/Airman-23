import Link from 'next/link'
import React from 'react'
import BlogCard from './BlogCard'

const BlogBanner = ({posts}: any) => {
  return (
    <div >
    <div className='bg-[#00708C] mx-8 my-14 p-5 rounded-lg'>
    <div className='flex justify-center m-3'>
      <h1 className='font-bold text-white text-lg'>What's new in the blog?</h1>
    </div>
    </div>  
    

    <div className='mx-8 space-x-2'>
        {posts.slice(0,1).map((post: any) => (
          <div key={post._id}>
            <BlogCard post={post}/>
          </div>
        ))}
    </div>
    
    <div className='my-8'>
      <Link className='ml-8 font-semibold underline' href={'/blog/posts'} >Go to blog!</Link>
    </div>
  </div>
  )
}

export default BlogBanner