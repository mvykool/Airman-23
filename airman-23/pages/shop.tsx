import React from 'react'
import Product from '../components/Product'
import { client } from '../lib/client'
import Category from '../components/Category'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import router from 'next/router'
import Head from 'next/head'
import ScrollToTop from '../components/ScrollTop'


interface Props {
    products: any
  }

const shop = ({ products}: Props) => {

   //go back

   const goBack = () => {
    router.back()
  }

  return (
    <div className='pt-10 bg-gray-200 pb-10 w-screen md:pr-[20%]'>

    <Head>
      <title>Air man 23 | Shop</title>
    </Head>   

    
    <div className='mt-10 bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 flex justify-center items-center ml-8 hover:scale-125 duration-300 cursor-pointer' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div>


    <div className='flex justify-center mx-8 p-5 md:p-2 rounded-lg my-10 bg-[#00708C] md:mx-20 '>
      <h1 className='font-bold text-white text-2xl md:text-lg'>Shop</h1>
      </div>


     {/**categories */}
     <Category/>
 

         {/**latest feed */}
      
      <div className='md:flex md:justify-center'>
      <h2 className='ml-8 text-lg my-4 font-bold border-b-4 border-[#00708c] w-20 md:w-[18%] md:text-center md:text-xl md:mt-5' >In Stock</h2>
      </div>
      

      <ScrollToTop/>

     <div className='md:flex md:justify-center'>
     <div className='grid grid-cols-2 md:grid-cols-3 mx-3 md:px-10'>
        { products?.map((product: any)=> <Product key={product._id} product={product} image={undefined} name={''} price={0} slug={''} />)}
       </div>
     </div>
    </div>
  )
}

export default shop

//server side props

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
   
   
    return {
     props: { products }
    }
   
   }