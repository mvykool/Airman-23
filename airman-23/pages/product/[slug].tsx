import React, { useState, Fragment } from 'react'
import Head from 'next/head';
import {  AiOutlineMinus, AiOutlinePlus  } from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { client, urlFor } from '../../lib/client'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import ProductCol from '../../components/ProductCol';
import { motion} from 'framer-motion'
import ScrollToTop from '../../components/ScrollTop';
import { Dialog, Transition } from '@headlessui/react'


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

  const { image } = product || {};
  const { name } = product || {};
  const { details } = product || {};
  const { price } = product || {};

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

  /**modal open when you click on add to cart */

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
    onAdd(product, qty)
  }


  return (
    <div className='bg-gray-200 pb-10 md:w-screen md:pr-[20%]'>
  
    <Head>
      <title>Air man 23 | details</title>
      <meta name="theme-color" content="#00708c" />

    </Head>
 

    <div className='md:flex  md:justify-around md:space-x-12 md:pl-10'>
      <div className='pt-10 relative'>
      <div className='hidden mt-10  bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 md:flex justify-center items-center -ml-10 hover:scale-125 duration-300 cursor-pointer' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div>

        <div className='flex justify-center '>
        <div className='absolute z-20 left-1 mt-10 md:hidden bg-white shadow-md rounded-full h-10 md:h-12 w-10 md:w-12 flex justify-center items-center ml-8 hover:scale-125 duration-300 cursor-pointer' onClick={goBack}>
        <MdOutlineKeyboardBackspace className='text-xl' />
      </div>


      {/** modal when you add a product */}


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h4"
                    className="text-base p-2 font-medium leading-6 text-gray-900"
                  >
                      A item was added to your cart successfully ✅
                  </Dialog.Title>
                  
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#00708c] px-4 py-2 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


        {/**card */}
         <motion.div 
        variants={cardVariant}
       initial="hidden"
       animate='show'
       whileInView="show"
       viewport={{ once: true }}
         className='absolute bg-white shadow-2xl top-20 md:top-[18%] md:w-[25vw] md:left-[30%] py-1 px-3 md:px-10 md:py-4 rounded-md w-[60vw] right-3'>
         <h1 className='my-5 text-sm font-bold text-[#00708c]'>{name}</h1>
       <div className='flex items-center justify-between '> 
       <p className="font-bold md:text-lg my-4"><span className='text-green-600'>$</span>{price}</p>
         <button type="button" className="p-2 rounded-md bg-[#00708c] text-white text-sm font-semibold shadow-md hover:scale-110 duration-300" onClick={handleBuyNow} >Buy Now</button>
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
          className='w-[111vw] h-[45vh] md:w-[28vw] md:h-[60vh] md:shadow-2xl md:my-20 md:rounded-lg '
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
           className="mx-8 md:mt-36 md:bg-white md:h-[70vh] md:rounded-lg md:shadow-xl px-2">
      
        <div className='md:mt-10 md:w-[30vw] md:space-x-5 '>

          <div>
            <h4 className='border-b-4 border-[#00708c] w-14 my-5 font-semibold md:ml-7 md:w-20 md:my-10 md:text-base'>Details</h4>

       
          <p className='my-4 md:px-8 arrival font-semibold text-sm md:w-[30vw] '>{details}</p>
          </div>
           
           {/**second image */}
          <div className='my-5 flex justify-center'>
           <Image
          width={500}
          height={500}
          alt='product img'
          src={urlFor(image && image[index]).url()}
          className=' md:mr-10 h-36 w-36'
          />
          </div>

        </div>
        
         {/**qtny and add to cart */}
          <div className="flex space-x-10 -mt-10 items-end md:ml-5 mb-20">
          <div >
            <h3 className='my-5 font-semibold border-b-4 border-[#00708c] w-20'>Quantity</h3>
            <p className="my-6 flex space-x-3 items-center">
              <span className="text-white bg-black p-1 rounded-sm cursor-pointer hover:bg-gray-700"  onClick={decQty} ><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="text-white bg-black p-1 rounded-sm cursor-pointer hover:bg-gray-700"  onClick={incQty} ><AiOutlinePlus /></span>
            </p>
          </div>
            <button type="button" className="p-2 my-5  rounded-md border-2 border-[#00708c] shadow-sm bg-white md:text-sm font-semibold text-[#00708c] duration-300 hover:scale-105" onClick={openModal}>Add to Cart</button>
    
          </div>
        </motion.div>
      </div>


      <ScrollToTop/>

      <div className='py-4 bg-[#00708c]  md:w-screen md:pr-[20%] md:pb-20 md:mb-20'>
        <h2 className='ml-6 md:ml-20 md:text-lg md:w-40 md:my-10 text-white w-36 font-semibold my-5'>You may also like</h2>
        <div className='md:flex md:justify-center'>
            <div className='grid  grid-cols-2 md:grid-cols-4 mx-8 '>
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