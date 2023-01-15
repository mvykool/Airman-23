import React from 'react'
import Link from 'next/link'
import { motion} from 'framer-motion'

/**framer motion variants */

const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.2}
  }
}


const Hero = () => {
  return (
    <div>
    <div className='hero md:pr-[15%] '>
       <div className='bg-[var(--bg-wrapper)] h-[50vh]'>
         <motion.h1
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
         className='flex justify-center pt-48 md:pt-36 md:text-4xl text-3xl text-white  logo-font'>Air Man 23</motion.h1>

         <div className='pt-16 md:pt-5 flex justify-center'>
         <Link href={'/shop'} >
         <motion.p
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
         className='text-white text-lg border-b-2 duration-100 hover:scale-125'>Go to shop</motion.p>
         </Link>
       </div>
         </div>
    </div>
    </div>
  )
}

export default Hero