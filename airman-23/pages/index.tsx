import Head from 'next/head'
import Banner from '../components/Banner'
import Category from '../components/Category'
import Feed from '../components/Feed'
import { client } from '../lib/client'
import Product from '../components/Product'


interface Props {
  products: any
}

export default function Home({ products}: Props) {
  return (
    <div>
      <Head>
        <title>Airman-23 | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {/**banner */}

     <Banner/>

     {/**categories */}
     <Category/>

     {/**latest feed */}

     <Feed/>
     <div className='products-container'>
        { products?.map((product: any)=> <Product key={product._id} product={product} />)}
       </div>
    </div>
  )
}

//server side props

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
 
 
  return {
   props: { products }
  }
 
 }