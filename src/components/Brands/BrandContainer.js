import React from 'react'
import Pagination from '../utility/Paginnationn'
import AllBrandPage from '../../page/Brand/AllBrandPage'

const BrandContainer = () => {
  return (
    <div style={{minHeight:"670px"}} >
        
    <AllBrandPage pathText="/allbrand"/>
    <Pagination/>
   
</div>
  )
}

export default BrandContainer;
