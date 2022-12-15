import React from 'react'
import Product from '../components/Product'
import { client } from '../lib/client'
import Category from '../components/Category'


interface Props {
    products: any
  }

const shop = ({ products}: Props) => {
  return (
    <div>
        <h1 className='mt-20'>Shop</h1>


     {/**categories */}
     <Category/>


         {/**latest feed */}
      
      <h2 className='ml-6 text-lg my-4 font-bold' >Latest :</h2>
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