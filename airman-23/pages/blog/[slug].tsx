import React from 'react'
import { client, urlFor } from '../../lib/client'
import Image from 'next/image';
import Head from 'next/head';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useRouter } from 'next/router';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../components/RichTextComponent';
import Link from 'next/link';
import ScrollToTop from '../../components/ScrollTop';
import { motion} from 'framer-motion'


/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 0.5, delay: 0.3}
  } 
}
   

interface Props{
   post: any
}

const page = ({post}: Props) => {


    const router = useRouter()

    const goBack = () => {
      router.back()
    }



  return (
    <div className='pt-10 bg-gray-200 pb-20'>
       <Head>
      <title>{post.title}</title>
      <meta name="theme-color" content="#00708c" />

    </Head>   

    <div className='mt-10 bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 flex justify-center items-center ml-8 hover:scale-125 duration-300 cursor-pointer' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div>

      
     {/**title */}
       <div className='my-10 md:my-8 mx-8 text-xl text-center p-2 font-bold border-b-4 border-[#00708c]'>
           <h1 className='md:text-2xl'>{post.title}</h1>
       </div>

       {/**image */}
        <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
        >
        <Image width={1000} height={1000} src={urlFor(post.mainImage.asset).url()} className='h-[30vh] w-full md:h-[65vh] md:w-[75vw] md:flex md:justify-center md:ml-[5%] md:rounded-md md:shadow-lg' alt="picture" />

        </motion.div>

       {/**date and author */}
       <div className='my-10 text-sm text-gray-500 mx-10 flex justify-center space-x-3 items-center'>
        <Image width={100} height={100} src={urlFor(post.author.image).url()} alt={post.author.name} className='rounded-full h-7 w-7' />
        <p>{post.author.name}</p>
        <p>|</p>
        <p>{ new Date(post._createdAt).toLocaleDateString
            ("en-US", {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })}
        </p>
       </div>

       <ScrollToTop/>

       {/**body */}

       
       <motion.section 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }} className='mx-8 md:mx-52 md:px-10 md:py-12 bg-white rounded-lg p-4'>
        <PortableText value={post.body}  components={RichTextComponents} />
          {/**link to the post */}

        <div className='mt-10 flex space-x-3'>
          <h3 className='text-gray-400'>Go to the original blog</h3>
          <Link className='text-green-500' href={`${post.link}`}>Here</Link>
        </div>
       </motion.section>

     
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