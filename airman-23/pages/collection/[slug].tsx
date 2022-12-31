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
import { motion} from 'framer-motion'

/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.2}
  } 
}

const cardVariant = {
  hidden : { opacity: 0, x: -100},
  show: { opacity: 1, x: 0,
  transition: { duration: 1.5, delay: 0.8}
  } 
}
  

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
 

    <div className='md:flex  md:justify-around md:space-x-12 md:pl-10'>
      <div className='pt-10 relative'>
      <div className='hidden mt-10 md:mt-20 bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 md:flex justify-center items-center ml-8 md:-ml-20 hover:scale-125 duration-300 cursor-pointer' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div>

        <div className='flex justify-center '>
        <div className='absolute left-1 mt-10 md:hidden bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 flex justify-center items-center ml-8 hover:scale-125 duration-300 cursor-pointer' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div>

        {/**card */}
         <motion.div 
        variants={cardVariant}
       initial="hidden"
       animate='show'
       whileInView="show"
       viewport={{ once: true }}
         className='absolute bg-white shadow-2xl top-20 md:top-[22%] md:w-[25vw] md:left-[30%] py-1 px-3 md:px-10 md:py-4 rounded-md w-[60vw] right-3'>
         <h1 className='my-5 text-sm md:text-lg font-bold text-[#00708c]'>{name}</h1>
       <div className='flex items-center justify-between '> 
       <p className="font-bold md:text-2xl my-4"><span className='text-green-600'>$</span>{price}</p>
         <button type="button" className="p-2 md:p-3 rounded-md bg-[#00708c] text-white text-sm md:text-base font-semibold shadow-md hover:scale-110 duration-300" onClick={handleBuyNow} >Buy Now</button>
       </div>
         </motion.div>

         {/**bg image */}
          <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
          >
          <Image
          className='w-full h-[45vh] md:w-[28vw] md:h-[60vh] md:shadow-2xl md:my-20 md:rounded-lg '
          width={600}
          height={1000} 
          alt='product img'
          src={urlFor(image && image[1]).url()}/>
          </motion.div>
        </div>
      </div>
         

         {/**details and more */}

           
           <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
           className="mx-8 md:mt-10">
      
        <div className='md:mt-52 md:w-[30vw] md:space-x-5 '>

          <div>
            <h4 className='border-b-4 border-[#00708c] w-14 my-5 font-semibold md:ml-1 md:w-20 md:my-10 md:text-2xl'>Details</h4>

       
          <p className='my-4 arrival md:text-lg md:w-[30vw] '>{details}</p>
          </div>
           
           {/**second image */}
          <div className='my-5 flex justify-center md:my-2'>
           <Image
          width={500}
          height={500}
          alt='product img'
          src={urlFor(image && image[index]).url()}
          className=' md:mr-10 md:h-64 md:w-64'
          />
          </div>

        </div>
        
         {/**qtny and add to cart */}
          <div className="flex space-x-6 -mt-10 items-end md:ml-5 mb-20">
          <div >
            <h3 className='my-5 font-semibold border-b-4 border-[#00708c] w-20'>Quantity</h3>
            <p className="my-6 flex space-x-3 items-center">
              <span className="text-white bg-black p-1 rounded-sm cursor-pointer hover:bg-gray-700"  onClick={decQty} ><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="text-white bg-black p-1 rounded-sm cursor-pointer hover:bg-gray-700"  onClick={incQty} ><AiOutlinePlus /></span>
            </p>
          </div>
            <button type="button" className="p-2 my-5  rounded-md border-2 border-[#00708c] shadow-sm bg-white font-semibold text-[#00708c] duration-300 hover:scale-105" onClick={() => onAdd(product, qty)}>Add to Cart</button>
    
          </div>
        </motion.div>
      </div>


      

      <div className='py-5 border-t-4 border-b-4 border-[#00708c] md:w-screen md:pr-[20%] md:pb-20 md:mb-20'>
        <h2 className='ml-6 md:ml-52 md:text-lg md:w-40 md:my-10 text-[#00708c] w-36 font-semibold my-5'>You may also like</h2>
        <div className='md:flex md:justify-center'>
            <div className='grid  grid-cols-2 md:grid-cols-4 mx-3'>
               {products.slice(0,4).map((item: any) => (
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