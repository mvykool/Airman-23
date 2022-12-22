import React from 'react'
import Head from 'next/head'
import { client, urlFor } from '../../lib/client'
import { useRouter } from 'next/router'
import Product from '../../components/Product'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'


interface ProductProp{
    products: any
    image: any
    name: string
    price: number
    slug: any
    topic: string
}

const Topic = ({ products} : ProductProp) => {

const router = useRouter()


let title: string = router.query.topic as string;






const filtered = products.filter((item: any) => (
    item.topic === title
))
      

//go back to previous page

const goBack = () => {
    router.back()
  }



return (
    <div className='pt-10 bg-gray-200 pb-40 '>
    <Head>
        <title>Air man 23 | {title}</title>
    </Head>

<div className='mt-10 bg-white shadow-md rounded-full h-10 w-10 flex justify-center items-center ml-8'>
  <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
</div>

<div className='flex justify-center mx-8 p-5 rounded-lg my-10 bg-[#00708C]'>
  <h1 className='font-bold text-white text-2xl'>{title}</h1>
  </div>



       {filtered.length > 0 ? 
       <div className='grid grid-cols-2 xl:grid-cols-3 mt-10 mx-3'>

        { filtered.map((product: any)=> <Product key={product._id} product={product} image={undefined} name={''} price={0} slug={''} />)}
       </div> : (
        <div className='mx-8 mt-20 pb-40'>
          <h1 className='font-semibold mx-4 text-lg'>No items of this category currently in stock</h1>
        </div>
       )}
    </div>
  )
}

export default Topic

//server side props

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
   
   
    return {
     props: { products }
    }
   
}