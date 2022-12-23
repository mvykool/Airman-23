import Head from 'next/head'
import Banner from '../components/Banner'
import Hero from '../components/Hero';
import { client } from '../lib/client';
import Arrivals from '../components/Arrivals';
import Cards from '../components/Cards';
import BlogBanner from '../components/BlogBanner';
import HeroBanner from '../components/HeroBanner';
import SecondHeroBanner from '../components/SecondHeroBanner';
import ThridBanner from '../components/ThridBanner';

interface Props {
  products: any
  bannerData: any
  posts: any
}


export default function Home({ products, bannerData, posts}: Props) {
  return (
    <div className='mt-20 pb-10 bg-gray-200'>
      <Head>
        <title>Air man 23 | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {/**banner and hero*/}
      {/**hero */}
    <Hero/>
     
     {/**banner */}
     <Banner />
    

    {/**arrivals */}

    <div className='mx-8 justify-center flex'>
      <Arrivals products={products}/>
    </div>


    {/**hero banner with discounts*/}

    <div className='ml-8 my-8'>
      <h1 className='font-semibold border-b-4 border-[#00708C] w-28'>Discounts 🔥</h1>
    </div>

    <div className='mx-3'>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>


    <SecondHeroBanner heroBanner={bannerData.length && bannerData[1]}/>

     <ThridBanner heroBanner={bannerData.length && bannerData[2]}/>

    </div>

    

    {/**Cards */}

    <div className='ml-8 mt-20'>
      <h1 className='font-semibold border-b-4 border-[#00708C] w-24'>Policies ✏️</h1>
    </div>


    <div className='mx-8'>

      <Cards/>

    </div>

    {/**Blog banner */}

    <div className='ml-8 mt-20'>
      <h1 className='font-semibold border-b-4 border-[#00708C] w-20'>Blog 📓</h1>
    </div>

    <BlogBanner posts={posts}/>

    </div>
  )
}

//server side props

export const getServerSideProps = async () => {
  const query = '*[_type == "collection"]';
  const products = await client.fetch(query);
 
  const postQuery = '*[_type == "post"]';
  const posts = await client.fetch(postQuery);
   


 const bannerQuery = '*[_type == "banner"]';
 const bannerData = await client.fetch(bannerQuery);
 
 
  return {
   props: { products, bannerData, posts }
  }
 
 }
