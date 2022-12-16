import React from 'react'
import { client, urlFor } from '../../lib/client'
import Image from 'next/image';

interface Props{
   post: any
}

const page = ({post}: Props) => {

  


    console.log(post)



  return (
    <div>
       <img src={urlFor(post.mainImage.asset).url()} className='h-20 w-20' alt="" />
    </div>
  )
}

export default page

//static paths


export const getStaticPaths = async () => {
    const query = `*[_type == "post"] {
        slug {
            current
        }
    }`;

    const posts = await client.fetch(query);

    const paths = posts.map((post: any) => ({
        params: {
            slug: post.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

//static props 

export const getStaticProps = async ({ params: { slug }}: any) => {
    const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
  


    const post = await client.fetch(query);
  
   
    return {
     props: { post }
    }
   }