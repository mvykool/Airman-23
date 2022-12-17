import React, { useState, useEffect } from 'react'
import { MdFavorite } from 'react-icons/md'
import user from '../sanity-project/schemas/user'
import { useStateContext } from '../context/StateContext'

//interface


interface likeProps {
    Likes: any[]
    Like: () => void
    Dislike: () => void
}


const LikeButton = ({Like, Dislike, Likes}: likeProps) => {

 
    const { user } = useStateContext();

    const [like, setLike] = useState(false)

    const filterLikes = Likes?.filter((item: any) => item._ref === user._id);
  

    useEffect(() => {
        if(filterLikes?.length > 0) {
            setLike(true)
        } else {
            setLike(false)
        }
    }, [  filterLikes ,Likes ])


  return (
    <div>
       {like ? (
        <MdFavorite className='text-red-500'/>
       ) : (
        <MdFavorite/>
       )}
       <p>{Likes?.length || 0}</p>
    </div>
  )
}

export default LikeButton