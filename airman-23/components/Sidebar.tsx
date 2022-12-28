import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-red-500 w-[20vw] h-screen hidden overflow-hidden md:block z-40'>
        <div className='hidden md:flex flex-col fixed bg-red-500 w-[20vw] h-screen'>
           <h1 className='pt-20 text-lg'>side bar</h1>
        </div>
    </div>
  )
}

export default Sidebar