import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { client } from '../../lib/client'

interface postsProps {
  posts: any
}

const blogPost = ({posts}: postsProps) => {


  const router = useRouter()

  const goBack = () => {
    router.push('..')
  }
  console.log(posts)

  return (
    <div>blogPost

    <div  className='mt-20 ml-5' onClick={goBack}>Go back</div>
     <h1 className='mt-20'> Blog</h1>


      <div>
        {posts.map((post: any) => (
          <div key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
            <p>{post.title}</p>
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