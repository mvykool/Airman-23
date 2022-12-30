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
    <div className='pt-10 bg-gray-200 pb-20 md:pb-40 md:h-screen '>

    <Head>
      <title>Air man 23 | Blog</title>
    </Head>   

    <div className='mt-10 md:mt-20 bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 flex justify-center items-center ml-8'>
        <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
      </div>

   
     <div className='md:flex md:justify-center'>
     <h1 className='font-bold text-black border-b-4 w-44 border-[#00708c] text-2xl md:text-4xl md:w-[18%] md:text-center my-10 mx-8'>Air man's Blog</h1>
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