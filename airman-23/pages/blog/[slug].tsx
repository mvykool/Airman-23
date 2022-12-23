import React from 'react'
import { client, urlFor } from '../../lib/client'
import Image from 'next/image';
import Head from 'next/head';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useRouter } from 'next/router';

interface Props{
   post: any
}

const page = ({post}: Props) => {


    const router = useRouter()

    const goBack = () => {
      router.back()
    }


    console.log(post.author._ref)

  return (
    <div className='pt-10 bg-gray-200 pb-20'>
       <Head>
      <title>{post.title}</title>
    </Head>   

    <div className='mt-10 bg-white shadow-md rounded-full h-10 w-10 flex justify-center items-center ml-8'>
      <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
    </div> 

     {/**title */}
       <div className='my-10 mx-8 text-xl text-center p-2 font-bold border-b-4 border-[#00708c]'>
           <h1>{post.title}</h1>
       </div>
       <img src={urlFor(post.mainImage.asset).url()} className='h-[30vh] w-full' alt="" />

       {/**date and author */}
       <div className='my-20'>
        <p>{post.author.name}</p>
        <p>{ new Date(post._createdAt).toLocaleDateString
            ("en-US", {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })}
        </p>
       </div>
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
    const query = `*[_type == "post" && slug.current == '${slug}'][0] 
    {
        ...,
        author->,
        categories[]->
    }
    `

    const post = await client.fetch(query);
  
   
    return {
     props: { post }
    }
   }