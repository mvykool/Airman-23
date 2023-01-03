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
import ScrollToTop from '../components/ScrollTop';

interface Props {
  products: any
  bannerData: any
  posts: any
}


export default function Home({ products, bannerData, posts}: Props) {
  return (
    <div className='mt-20 pb-10 bg-gray-200 md:pr-[15%]'>
      <Head>
        <title>Air man 23 | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="theme-color" content="#00708c" />
        <link rel="shortcut icon" type="image/png" href="/fireball.png" />
      </Head>
     {/**banner and hero*/}
      {/**hero */}
    <Hero/>
     
     {/**banner */}
    <div className='md:flex md:justify-center'>
    <Banner />
    </div>
    

    {/**arrivals */}

    <div className='mx-8 justify-center flex'>
      <Arrivals products={products}/>
    </div>


    {/**hero banner with discounts*/}

    <div className='ml-8 my-8 md:my-14 md:flex md:justify-center'>
      <h1 className='font-semibold border-b-4 md:text-2xl border-[#00708C] w-28 md:w-40 '>Discounts 🔥</h1>
    </div>

    <div className='mx-3 md:my-20 md:flex md:justify-center '>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>


    <SecondHeroBanner heroBanner={bannerData.length && bannerData[1]}/>

     <ThridBanner heroBanner={bannerData.length && bannerData[2]}/>

    </div>

    

    {/**Cards */}

    <div className='ml-8 mt-20 md:my-20 md:flex md:justify-center'>
      <h1 className='font-semibold border-b-4 md:text-2xl border-[#00708C] w-24 md:w-36'>Policies ✏️</h1>
    </div>


    <div className='mx-8 md:flex md:justify-center'>

      <Cards/>

    </div>

    <ScrollToTop/>

    {/**Blog banner */}

    <div className='ml-8 mt-20 md:flex md:justify-center'>
     <h1 className='font-semibold border-b-4 md:text-2xl border-[#00708C] w-24 md:w-36'>Blog 📓 </h1>
    </div>

   <div className='md:flex md:justify-center'>
   <BlogBanner posts={posts}/>
   </div>

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
