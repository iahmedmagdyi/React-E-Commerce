import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle1 from '../utility/SubTitle'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png"
import brand2 from "../../images/brand2.png"
import brand3 from "../../images/brand3.png"

const BrndFeatureContainer = ({ title, btnTitle, pathText }) => {
  return (
    <Container>
      <SubTitle1 title={title} btnTitle={btnTitle} pathText="/allbrand" />
      <Row className='d-flex my-2 justify-content-between'>
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
      </Row>
    </Container>
  )
}

export default BrndFeatureContainer;
