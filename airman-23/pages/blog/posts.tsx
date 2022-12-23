import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { client, urlFor } from '../../lib/client'

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
    <div className='pt-10 bg-gray-200 pb-10'>

    <Head>
      <title>Air man 23 | Blog</title>
    </Head>   

    <div className='mt-10 bg-white shadow-md rounded-full h-10 w-10 flex justify-center items-center ml-8'>
      <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
    </div>

    <div className='flex justify-center mx-8 py-10 rounded-lg my-10 bg-[#00708C]'>
      <h1 className='font-bold text-white text-2xl'>Blog</h1>
      </div>


      <div className='flex mx-8 space-x-2'>
        {posts.map((post: any) => (
          <div key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <div>
               <Image
                width={150}
                height={150}
                alt='blog-pic'
                src={urlFor(post.mainImage.asset).url()}
                className='h-52 w-52'
                /> 
               <p>{post.title}</p>
              </div>
            </Link>
       
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