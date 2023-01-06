import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import BlogCard from '../../components/BlogCard'
import { client} from '../../lib/client'

interface postsProps {
  posts: any
}

const blogPost = ({posts}: postsProps) => {


  const router = useRouter()

  const goBack = () => {
    router.back()
  }



 
  return (
    <div className='pt-10 bg-gray-200 pb-20 md:pb-40 '>

    <Head>
      <title>Air man 23 | Blog</title>
      <meta name="theme-color" content="#00708c" />

    </Head>   

    <div className='mt-10 bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 flex justify-center items-center ml-8 hover:scale-125 duration-300 cursor-pointer' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div>


   
     <div className='md:flex md:justify-center'>
     <h1 className='font-bold text-black border-b-4 w-44 border-[#00708c] text-2xl md:text-xl md:w-[18%] md:text-center my-10 mx-8'>Air man's Blog</h1>
     </div>
     


      <div className='mx-8 md:flex md:justify-center md:flex-wrap md:space-x-5] md:mx-20'>
        {posts.map((post: any) => (
          <div key={post._id}>
            <BlogCard post={post}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default blogPost

//server side props

export const getServerSideProps = async () => {
  const query = '*[_type == "post"]';
  const posts = await client.fetch(query);
 
 
  return {
   props: { posts }
  }
 
 }