import router from 'next/router'
import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const shipping = () => {

   //go back

   const goBack = () => {
    router.back()
  }

  return (
    <div className='pt-10 bg-gray-200 pb-10'>

      <div className='mt-10 bg-white shadow-md rounded-full h-10 w-10 flex justify-center items-center ml-8'>
        <MdOutlineKeyboardBackspace className='text-xl' onClick={goBack}/>
      </div>

      <div className='my-10 flex bg-[#00708c] justify-center p-4 mx-8'>
        <h1 className='text-xl text-white font-semibold'>Shipping Policy</h1>
      </div>
        
        <div className='bg-white mx-8 rounded-sm shadow-sm py-10'>
          <h1 className='text-md mx-5 font-semibold'> Thank you for visiting and shopping at Airman-23.</h1>
        <p className='text-md p-3'>
     Domestic Shipping Policy
     Shipment processing time
     </p>
     
     <p className='text-md p-3'>
     All orders are processed within 2–3 business days of receipt. Orders are not processed or shipped from Friday, 12 pm EST through Sunday, or holidays.
     </p>
   
     <p className='text-md p-3'>
     If we are experiencing a high volume of orders, shipments may be delayed by a few days. If your shipment experiences a significant delay, we will contact you via email or phone.
     </p>
 
     <p className='text-md p-3'>
     Shipping rates and delivery estimates
     Shipping charges for your order will be calculated and displayed at checkout.
     </p>
    

     <p className='text-md mx-5 font-semibold'>
       FedEx, UPS, DHL, ARAMEX, EcomExpress
     </p>

      <p className='text-md p-3'>
        Delivery within the US is free, and international the fee is $50
      </p>

    
      <p className='text-md p-3'>

       Shipment to P.O. boxes or APO/FPO addresses

      Airman-23.com ships to addresses within the US, US Territories, and APO/FPO/DPO addresses.
      </p>

      <p className='text-md p-3'>

      Shipment Confirmation and Order Tracking

      </p>

      <p className='text-md p-3'>

      You will receive a Shipment Confirmation email with your tracking number once your order has shipped. The tracking number will be active within 24 hours.


      </p>
          
        <p className='text-md p-3'>

        Customs, Duties, and Taxes

      </p>

       <p className='text-md p-3'>

       Airman.com is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the customer’s responsibility (including tariffs, taxes, and other costs).

      </p>

        <p className='text-md p-3'>
        Damages

      AIrman.com is not liable for any products damaged or lost during shipping. If you

      </p>
      <p className='text-md p-3'>
      received your order damaged, please file a claim with the shipment carrier. Save all packaging materials and damaged goods before filing a claim.

      </p>
      <p className='text-md p-3'>
     
         International Shipping Policy 

         We currently do not ship outside the continental US.

      </p>
        <p className='text-md p-3'>
     
        
[If you ship outside the US, add the countries you’ll ship to with details about your process and additional fees.]

      </p>
      <p className='text-md p-3'>
     
        
      Incorrect Shipping Addresses and Refused Delivery
      We make every attempt to validate the shipping address provided at checkout to ensure it’s recognized as a valid address by the USPS. If we cannot validate the address, we will try to contact the customer to provide an updated address. If we cannot update the address, the order will be canceled and refunded.
           </p>
           <p className='text-md p-3'>
           AIRMAN-23 will not be held responsible if the customer provides the wrong shipping address and we cannot recover the package.
           </p>
           <p className='text-md p-3'>
           Missing or Stolen Shipments
           If you didn’t receive your order, but the shipping carrier has reported that it was delivered, please let us know as soon as possible:
           </p>
           <p className='text-md p-3'>
           Call 101010101
         Or alert us at AIRMAN@airman.com
         We will file a claim with the shipping carrier. Local law enforcement will be involved. We will replace or refund your order when the investigation is complete. Allow up to 21 days for the investigation.
           </p>
      
    
        </div>
    </div>
  )
}

export default shipping