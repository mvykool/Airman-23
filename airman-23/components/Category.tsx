import React from 'react'
import { topics } from '../utils/topics'
import Link from 'next/link'


const Category = () => {
  return (
    <div className=' w-full'>
       <h1 className='mt-10 mb-10 border-b-4 border-[#00708c] w-28 ml-8 font-bold text-lg'>Categories</h1>
       <div className='flex overflow-x-auto h-16 pb-4 mt-5 mb-10'>
        {topics.map((topic) => (
          <Link href={{ pathname: `/category/${topic.name}`}} key={topic.name} className='bg-white shadow-md text-[#00708c] font-semibold border-2 border-[#00708c] mx-4 flex justify-center items-center rounded-md'>
            <p className='m-4'>{topic.name}</p>
          </Link>
        ))}
       </div>
    </div>
  )
}

export default Category