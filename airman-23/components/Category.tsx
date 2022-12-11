import React from 'react'
import { topics } from '../utils/topics'


const Category = () => {
  return (
    <div className='h-40 w-full'>
       <h1 className='my-10 mx-3 font-bold text-lg'>Categories :</h1>
       <div className='flex overflow-x-auto h-18 pb-4 mt-5'>
        {topics.map((topic) => (
          <div className='border-2 border-black mx-4 flex justify-center items-center rounded-md'>
            <p className='m-4'>{topic.name}</p>
          </div>
        ))}
       </div>
    </div>
  )
}

export default Category