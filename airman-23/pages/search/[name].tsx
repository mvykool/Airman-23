import React from 'react'
import Head from 'next/head'
import { client, urlFor } from '../../lib/client'
import { useRouter } from 'next/router'
import Product from '../../components/Product'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'


interface ProductProp{
    products: any 
    productsCol: any
    image: any
    name: string
    price: number
    slug: any
    topic: string
}

const Search = ({ products, productsCol} : ProductProp) => {

const router = useRouter()


let query = router.query.name;



const filtered = products.filter((item: any) => (
    item.name.toLowerCase().includes(query)
))

const filteredCol = productsCol.filter((item: any) => (
    item.name.toLowerCase().includes(query)
))

    


//go back to previous page

const goBack = () => {
    router.back();
  }


return (
    <div className='pt-10 bg-gray-200 pb-40'>
    <Head>
        <title>Air man | {query}</title>
    </Head>

    <div className='mt-10 bg-white rounded-full shadow-md h-10 w-10 flex justify-center items-center ml-8'>
      <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
    </div>
    
      <div className='ml-8 my-10 text-2xl flex items-center space-x-3'>
       <p className=''>Results of :</p> 
      <h1 className='font-bold'>{query}</h1>
      </div>
     

       <div>
       {filtered.length > 0 ? 
       <div className='grid grid-cols-2 xl:grid-cols-3 mt-10 mx-3'>

        { filtered.map((product: any)=> <Product key={product._id} product={product} image={undefined} name={''} price={0} slug={''} />)}
       </div> :
         filteredCol.length > 0 
         ? ( 
            <div className='grid grid-cols-2 xl:grid-cols-3 mt-10 mx-3'>

            { filteredCol.map((product: any)=> <Product key={product._id} product={product} image={undefined} name={''} price={0} slug={''} />)}
           </div> )
         : (
          <div className='my-5 mx-8'>
            <p className='text-[#00708c] font-semibold text-lg'>Seems like we don't have that item in the shop at the moment :c ...</p>
            <div className='flex my-5 items-center space-x-3'>
              <FaSearch className='text-[#00708c] text-2xl my-5'/>
              <p className='text-[#00708c] text-4xl my-5'>?</p>
            </div>
            <p className='text-[#00708c] my-5 font-bold'>If you would like to request for a specific pair of sneakers, let us know in our contact from! 👇</p>
            <div className='flex space-x-3'>
            <Link href={'/contact'} className='p-2 text-white bg-[#00708c] rounded-md'>
             Contact us!
            </Link>
            <Link href={'/'} className='p-2 text-[#00708c] border-2 border-[#00708c] rounded-md'>
             Back to Home
            </Link>
            </div>
          </div>
         ) }
       </div>
    </div>
  )
}

export default Search

//server side props

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const queryCol = '*[_type == "collection"]';


    const products = await client.fetch(query);
    const productsCol = await client.fetch(queryCol);


    return {
     props: { products, productsCol }
    }
   
}