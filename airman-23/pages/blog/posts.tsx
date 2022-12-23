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

  console.log(posts)


  return (
    <div className='pt-10 bg-gray-200 pb-20'>

    <Head>
      <title>Air man 23 | Blog</title>
    </Head>   

    <div className='mt-10 bg-white shadow-md rounded-full h-10 w-10 flex justify-center items-center ml-8'>
      <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
    </div>

   
      <h1 className='font-bold text-black border-b-4 w-44 border-[#00708c] text-2xl my-10 mx-8'>Air man's Blog</h1>
     


      <div className='flex mx-8 space-x-2'>
        {posts.map((post: any) => (
          <div key={post._id}>
            <BlogCard post={post} />
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