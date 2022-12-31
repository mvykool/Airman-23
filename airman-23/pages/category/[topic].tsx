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
    <div className='pt-10 bg-gray-200 pb-40 w-screen'>
    <Head>
        <title>Air man 23 | {title}</title>
    </Head>

    <div className='mt-10 bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 flex justify-center items-center ml-8 hover:scale-125 duration-300 cursor-pointer' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div>


<div className='flex justify-center mx-8 p-5 rounded-lg my-10 bg-[#00708C] md:hidden'>
  <h1 className='font-bold text-white text-2xl'>{title}</h1>
  </div>

  <div className='md:flex md:justify-center md:mr-[20%] md:my-10'>
      <h2 className='ml-8 text-lg my-4 font-bold border-b-4 border-[#00708c] w-14 md:w-[18%] md:text-center md:text-2xl' >{title}</h2>
      </div>


   <div className='md:flex md:justify-center md:mr-[20%] md:-mt-10 ' >
   {filtered.length > 0 ? 
       <div className='grid grid-cols-2 xl:grid-cols-3 mt-10 md:mt-2 mx-3'>

        { filtered.map((product: any)=> <Product key={product._id} product={product} image={undefined} name={''} price={0} slug={''} />)}
       </div> : (
        <div className='mx-8 mt-20 pb-40'>
          <h1 className='font-semibold mx-4 text-lg'>No items of this category currently in stock</h1>
        </div>
       )}
   </div>
       
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