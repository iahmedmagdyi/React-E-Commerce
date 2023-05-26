import React from 'react'


import Slider1 from '../../components/Home/Sider.js'
import HomeCategory from '../../components/Home/HomeCategory'
import CardProductContainer from '../../components/Products/CardProductContainer'
import DiscountSection from '../../components/Home/DiscountSection'
import BrndFeatureContainer from '../../components/Brands/BrandFeatureContainer'


const HomePage = () => {
  return (
    <div>
      
      <Slider1/> 
      <HomeCategory title="CATEGORIES " btnTitle="MORE"/>
      <CardProductContainer title="MOST SELLING" btnTitle="MORE"  pathText="/product"/>
      <DiscountSection/>
      <CardProductContainer title="MOST POPULAR" btnTitle="MORE" pathText="/product"/>
      <BrndFeatureContainer title="BRANDS" btnTitle="MORE" />
      
    </div>
  )
}

export default HomePage;
