import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51M8tcrBTNSBQlNFyvTtdxnIijcgCkUGVk7B00uQhYM6LtIIDoqKOH2fxRGU51SiF0KxwahcQUsQqUk9vBKVuSBci00fjNeMZVB', {
  apiVersion: '2022-11-15'
});

export default async function handler(req: any, res: any) {

  

  if (req.method === 'POST') {
    try {
      const params: any = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
            { shipping_rate: 'shr_1M8ttLBTNSBQlNFyEyPm46Db'},
            { shipping_rate: 'shr_1M8tu0BTNSBQlNFyFMHjFudc'},
        ],
        line_items: req.body.map((item: any) => {
            const img = item.image[0].asset._ref;
            const newImage = img.replace('image-', 'https://cdn.sanity.io/images/s5ctshas/production/').replace('-png', '.png');
  
            return {
              price_data: { 
                currency: 'usd',
                product_data: { 
                  name: item.name,
                  images: [newImage],
                },
                unit_amount: item.price * 100,
              },
              adjustable_quantity: {
                enabled:true,
                minimum: 1,
              },
              quantity: item.quantity
            }
          }),
          success_url: `${req.headers.origin}/success`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
        }
  
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create(params);
  
        res.status(200).json(session);
      } catch (err: any) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }