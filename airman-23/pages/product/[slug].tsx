import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus  } from 'react-icons/ai';
import  Product  from '../../components/Product';
import { useStateContext } from '../../context/StateContext'
import { useRouter } from 'next/router';

import { client, urlFor } from '../../lib/client'


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
    router.push('..')
  }

  return (
    <div>
        <div>
            <div>
              
              <div onClick={goBack} >GO back</div>

                <div className='image-container'>
                  <img src={urlFor(image && image[index]).url()} className='product-detail-image'/>
                </div>
            </div>
     

           
           <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty} ><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty} ><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={handleBuyNow} >Buy Now</button>
          </div>
        </div>
      </div>


      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
            <div className='maylike-products-container track'>
               {products.map((item: any) => (
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
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';


    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
   
    return {
     props: { products, product }
    }
   }