import router from 'next/router'
import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const refund = () => {

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
        <h1 className='text-xl text-white font-semibold'>Refund Policy</h1>
      </div>
          
        <div className='bg-white mx-8 rounded-sm shadow-sm py-10'>
        <h1 className='text-md mx-5 font-semibold'> Thank you for visiting and shopping at Airman-23.</h1>
      
      <p className='text-md p-3'>      
We offer refund and/or exchange within the first 30 days of your purchase, if 30 days have passed since your purchase, you will not be offered a refund and/or exchange of any kind.
     </p>

     <p className='text-md p-3'>      
     
     Eligibility for Refunds and Exchanges
     </p>
     <p className='text-md p-3'>      
     
     Your item must be unused and in the same condition that you received it.
     </p>
     <p className='text-md p-3'>      
     
     The item must be in the original packaging.
     </p>
     <p className='text-md p-3'>      
     
     To complete your return, we require a receipt or proof of purchase.
     </p>
     <p className='text-md p-3'>      
     
     Only regular priced items may be refunded, sale items cannot be refunded.
     </p>
     <p className='text-md p-3'>      
     
     If the item in question was marked as a gift when purchased and shipped directly to you, you will receive a gift credit for the value of your return.

     </p>
     <p className='text-md p-3'>      
     
     Exchanges (if applicable)

We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at (Add Relevant Email Address) and send your item to: (Relevant Address).

     </p>
     <p className='text-md p-3'>      
     
     Exempt Goods

   The following are exempt from refunds:
     </p>
     <p className='text-md p-3'>      
     
     Gift cards
     Some health and personal care items
    Partial refunds are granted (if applicable)

    Any item not in its original condition, is damaged or missing parts for reasons not due to our error.
     </p>
     <p className='text-md p-3'>      
     Any item that is returned more than 30 days after delivery.
     </p>
     <p className='text-md p-3'>      
     
     Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
      </p>
      <p className='text-md p-3'>      
     
      If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
      </p>
      <p className='text-md p-3'>      
      Late or missing refunds
     </p>
     <p className='text-md p-3'>      
     If you have not received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.
     </p>
     <p className='text-md p-3'>      
     If you have done all of this and you still have not received your refund yet, please contact us at AIRMAN@airman.com
     </p>
     <p className='text-md p-3'>      
     Shipping
     </p>
     <p className='text-md p-3'>      
     Please do not send the product back to the manufacturer. It must be sent to the following Address (Relevant Address).
     </p>
     <p className='text-md p-3'>      
     You will be responsible for paying for your own shipping costs for returning your item.
     </p>
     <p className='text-md p-3'>      
     Shipping costs are non-refundable! If you receive a refund, the cost of return shipping will be deducted from your refund.
     </p>
     <p className='text-md p-3'>      
     Depending on where you live, the time it may take for your exchanged product to reach you, may vary.
     </p>
     <p className='text-md p-3'>      
     Please see, we cannot guarantee that we will receive your returned item.
     </p>
        </div>
      </div>
  )
}

export default refund