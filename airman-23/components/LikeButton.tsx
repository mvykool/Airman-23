import React, { useState} from 'react'
import { MdFavorite } from 'react-icons/md'

const LikeButton = () => {

 
    const [like, setLike] = useState(false)

  return (
    <div>
       {like ? (
        <MdFavorite className='text-red-500'/>
       ) : (
        <MdFavorite/>
       )}
    </div>
  )
}

export default LikeButton