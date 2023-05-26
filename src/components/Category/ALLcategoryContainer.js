import React from 'react'

import AllCategoryPage from '../../page/category/AllCategoryPage'
import Pagination from '../utility/Paginnationn'

const ALLcategoryContainer = () => {
  return (
    <div style={{minHeight:"670px"}} >
        
         <AllCategoryPage/>
         <Pagination/>
        
    </div>
  )
}

export default ALLcategoryContainer
