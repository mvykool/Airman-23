import { loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<any> | undefined;

const getStripe = (): Promise<any> => {
  if(!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }

  return stripePromise;
}

export default getStripe;
