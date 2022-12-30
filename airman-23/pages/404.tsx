import Link from 'next/link'
import React from 'react'

const notPage = () => {
  return (
    <div className='bg-gray-200 w-screen h-screen'>

        <div className='flex justify-center pt-[20%]'>
            <h1 className='text-lg font-bold'>Error 404 | Not page Found
            </h1>
        </div>

        <div className='flex justify-center my-10'>
            <img src="/fireball.png" className='h-20 ' alt="" />
         </div>

          <Link href={'/'} className='flex justify-center'>
                <button className='text-white bg-[#00708c] p-4 rounded-sm shadow-md'>Go back Home</button>
          </Link>

    </div>
  )
}

export default notPage