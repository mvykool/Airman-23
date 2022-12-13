import React from 'react'
import Head from 'next/head'
import { client, urlFor } from '../../lib/client'
import { useRouter } from 'next/router'
import Product from '../../components/Product'


interface ProductProp{
    products: any
    image: any
    name: string
    price: number
    slug: any
    topic: string
}

const Search = ({ products} : ProductProp) => {

const router = useRouter()


let query = router.query.name;



const filtered = products.filter((item: any) => (
    item.name.toLowerCase().includes(query)
))
    
console.log(filtered)

//go back to previous page

const goBack = () => {
    router.push('..')
  }


return (
    <div className='mt-20 h-[80vh]'>
    <Head>
        <title>Air man | {query}</title>
    </Head>

    <div onClick={goBack} >GO back</div>
       <h1>{query}</h1>

       <div>
       {filtered.length > 0 ? 
       <div className='grid grid-cols-2 xl:grid-cols-3 mt-10 mx-3'>

        { filtered.map((product: any)=> <Product key={product._id} product={product} image={undefined} name={''} price={0} slug={''} />)}
       </div> :
        "No items currently"}
       </div>
    </div>
  )
}

export default Search

//server side props

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
   
   
    return {
     props: { products }
    }
   
}