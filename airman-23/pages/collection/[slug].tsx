import React, { useState } from 'react'
import Head from 'next/head';
import { AiOutlineMinus, AiOutlinePlus  } from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { client, urlFor } from '../../lib/client'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import ProductCol from '../../components/ProductCol';
import Product from '../../components/Product';


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
    router.back( )
  }




  return (
    <div className='bg-gray-200 pb-10'>
  
    <Head>
      <title>Air man 23 | details</title>
    </Head>


    <div>
      <div className='pt-10 relative'>
        <div className='flex justify-center '>
        <div className='mt-10 absolute bg-white shadow-md rounded-full h-10 w-10 flex left-7 items-center'>
        <MdOutlineKeyboardBackspace className='text-xl mx-auto' onClick={goBack}/>
      </div>
        {/**card */}
         <div className='absolute bg-white shadow-2xl top-28 py-1 px-3 w-[60vw] rounded-md right-3'>
         <h1 className='my-5 text-md font-bold text-[#00708c]'>{name}</h1>
       <div className='flex items-center justify-between '> 
       <p className="font-bold text-2xl my-4"><span className='text-green-600'>$</span>{price}</p>
         <button type="button" className="p-2 rounded-md bg-[#00708c] text-white font-semibold shadow-md" onClick={handleBuyNow} >Buy Now</button>
       </div>
         </div>

         {/**bg image */}
          <Image
          className='w-full h-[50vh]'
          width={220}
          height={220} 
          alt='product img'
          src={urlFor(image && image[1]).url()}/>
        </div>
      </div>
     

           
           <div className="mx-8">
      
        
          <h4 className='border-b-4 border-[#00708c] w-14 my-5 font-semibold'>Details</h4>
          <p className='my-4'>{details}</p>
           
           {/**second image */}
          <div className='my-10 flex justify-center'>
           <Image
          width={220}
          height={220} 
          alt='product img'
          src={urlFor(image && image[index]).url()}/>
          </div>

         {/**qtny and add to cart */}
          <div className="flex space-x-6 my-10  items-end">
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


      

      <div className='py-5 bg-[#00708c]'>
        <h2 className='ml-6 text-white w-36 font-semibold my-5'>You may also like</h2>
        <div>
            <div className='grid  grid-cols-2 mx-3'>
               {products.slice(0,2).map((item: any) => (
                <Product key={item._id} product={item} image={undefined} name={''} price={0} slug={''} />
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
    const queryCol = `*[_type == "collection" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';



    const product = await client.fetch( queryCol);
    const products = await client.fetch(productsQuery);
   
    return {
     props: { products, product }
    }
   }