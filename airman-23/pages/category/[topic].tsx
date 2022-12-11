import React from 'react'
import Head from 'next/head'
import { client, urlFor } from '../../lib/client'
import { useStateContext } from '../../context/StateContext'

import { useRouter } from 'next/router'




interface Product{
    products: any
    image: any
    name: string
    price: number
    slug: any
    topic: string
}

const Topic = ({ products} : Product) => {

const router = useRouter()


let title: string = router.query.topic as string;


console.log(title)



const filtered = products.filter((item: any) => (
    item.topic === title
))
      

console.log(filtered)

return (
    <div>
    <Head>
        <title>Air man | {title}</title>
    </Head>
       <h1>{title}</h1>

       {filtered.length > 0 ? 
       <div>
        
         {filtered.map((item:any)=> (
            <p>{item.name}</p>
         ))}
       </div> :
        "No items currently"}
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