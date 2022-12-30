import React, { useState } from 'react'
import Head from 'next/head';
import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus  } from 'react-icons/ai';
import  Product  from '../../components/Product';
import { useStateContext } from '../../context/StateContext'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { client, urlFor } from '../../lib/client'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import ProductCol from '../../components/ProductCol';


interface Props{
  product: any
  products: any
}

const ProductDetails = ({ product, products }: Props) => {

   const { image, name, details, price } = product;

   const [index, setIndex] = useState(0);

   //destructure context

   const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

   const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }


  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <div className='bg-gray-200 pb-10 md:w-screen md:pr-[20%]'>
  
    <Head>
      <title>Air man 23 | details</title>
    </Head>


    <div>
      <div className='pt-10 relative'>
      <div className='hidden mt-10 md:mt-20 bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 md:flex justify-center items-center ml-8' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div>

        <div className='flex justify-center '>
        <div className='absolute left-1 mt-10 md:hidden bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 flex justify-center items-center ml-8' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div>
        {/**card */}
         <div className='absolute bg-white shadow-2xl top-20 md:top-40 md:w-[25vw] md:right-72 py-1 px-3 md:px-10 md:py-4 rounded-md w-[60vw] right-3'>
         <h1 className='my-5 text-base md:text-lg font-bold text-[#00708c]'>{name}</h1>
       <div className='flex items-center justify-between '> 
       <p className="font-bold text-2xl my-4"><span className='text-green-600'>$</span>{price}</p>
         <button type="button" className="p-2 md:p-3 rounded-md bg-[#00708c] text-white font-semibold shadow-md" onClick={handleBuyNow} >Buy Now</button>
       </div>
         </div>

         {/**bg image */}
          <Image
          className='w-full h-[50vh] md:w-[30vw] md:h-[60vh] md:shadow-2xl md:my-20 md:rounded-lg '
          width={600}
          height={1000} 
          alt='product img'
          src={urlFor(image && image[1]).url()}/>
        </div>
      </div>
         

         {/**details and more */}

           
           <div className="mx-8">
      
        <div className='md:flex md:justify-center md:items-center'>

          <div>
            <h4 className='border-b-4 border-[#00708c] w-14 my-5 font-semibold md:ml-20 md:w-20 md:my-10 md:text-2xl'>Details</h4>

       
          <p className='my-4 arrival  md:text-lg md:w-[40vw] md:px-20'>{details}</p>
          </div>
           
           {/**second image */}
          <div className='my-10 flex justify-center'>
           <Image
          width={500}
          height={500}
          alt='product img'
          src={urlFor(image && image[index]).url()}
          className='md:mt-10 md:mr-10 md:h-64 md:w-64'
          />
          </div>

        </div>
        
         {/**qtny and add to cart */}
          <div className="flex space-x-6 my-10  items-end md:ml-[20%] md:mb-20">
          <div >
            <h3 className='my-5 font-semibold border-b-4 border-[#00708c] w-20'>Quantity</h3>
            <p className="my-6 flex space-x-3 items-center">
              <span className="text-white bg-black p-1 rounded-sm"  onClick={decQty} ><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="text-white bg-black p-1 rounded-sm"  onClick={incQty} ><AiOutlinePlus /></span>
            </p>
          </div>
            <button type="button" className="p-2 my-5  rounded-md border-2 border-[#00708c] shadow-sm bg-white font-semibold text-[#00708c]" onClick={() => onAdd(product, qty)}>Add to Cart</button>
    
          </div>
        </div>
      </div>


      

      <div className='py-5 bg-gradient md:w-screen md:pr-[20%] md:pb-20'>
        <h2 className='ml-6 md:ml-52 md:text-lg md:w-40 md:my-10 text-white w-36 font-semibold my-5'>You may also like</h2>
        <div className='md:flex md:justify-center'>
            <div className='grid  grid-cols-2 md:grid-cols-4 mx-3'>
               {products.slice(0,4).map((item: any) => (
                <ProductCol key={item._id} product={item} image={undefined} name={''} price={0} slug={''} />
               ))} 
            </div>

        </div>

      </div>
</div>
  
  )
}

export default ProductDetails

//static paths


export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product: any) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

//static props 

export const getStaticProps = async ({ params: { slug }}: any) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const colQuery = '*[_type == "collection"]';

    const product = await client.fetch(query);
    const products = await client.fetch(colQuery);
   
    return {
     props: { products, product }
    }
   }