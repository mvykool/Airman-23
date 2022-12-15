import React from 'react'
import { client } from '../../lib/client'

interface postsProps {
  posts: any
}

const blogPost = ({posts}: postsProps) => {


  console.log(posts)

  return (
    <div>blogPost


     <h1 className='mt-20'> Blog</h1>


      <div>
        {posts.map((post: any) => (
          <div>
            <p>{post.title}</p>
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