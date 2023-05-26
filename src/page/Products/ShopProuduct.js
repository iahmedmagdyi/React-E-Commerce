import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import { Col, Container,  Row } from 'react-bootstrap'
import SearchCountResult from '../../components/utility/SearchCountResult'
import SideFilter from '../../components/utility/SideFillter'
import CardProductContainer from '../../components/Products/CardProductContainer'
import  Paginationn from "../../components/utility/Paginnationn"

const ShopProduct = () => {
  return (

    <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title=" 400 Products available" />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                         <CardProductContainer title="" btntitle=""/>
                    </Col>
                </Row>
                    <Paginationn />
            </Container>
        </div>
  )
}

export default ShopProduct;

