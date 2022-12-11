import React from 'react'
import { Box} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
      <Box display='flex' alignItems="center" justifyContent="space-around">
         {/**Logo */}

         <div>
            <h3>23</h3>
        </div>
       
       {/**search bar */}

       <div>
         <input type="text" placeholder='Search..' className='search-bar'/>
       </div>

       {/**menu */}

       menu
      </Box>
    </div>
  )
}

export default Navbar