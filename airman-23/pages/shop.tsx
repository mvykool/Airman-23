import React from 'react'
import Product from '../components/Product'
import { client } from '../lib/client'
import Category from '../components/Category'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import router from 'next/router'


interface Props {
    products: any
  }

const shop = ({ products}: Props) => {

   //go back

   const goBack = () => {
    router.back()
  }

  return (
    <div className='pt-10 bg-gray-200 pb-10'>

    <div className='mt-10 bg-white rounded-full h-10 w-10 flex justify-center items-center ml-8'>
      <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
    </div>

    <div className='my-10 flex bg-[#00708c] justify-center p-4 mx-8'>
      <h1 className='text-xl text-white font-semibold'>Shop 🛍️</h1>
    </div>


     {/**categories */}
     <Category/>


         {/**latest feed */}
      
      <h2 className='ml-8 text-lg my-4 font-bold border-b-4 border-[#00708c] w-14' >Latest</h2>
     <div className='grid grid-cols-2 xl:grid-cols-3 mx-3'>
        { products?.map((product: any)=> <Product key={product._id} product={product} image={undefined} name={''} price={0} slug={''} />)}
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