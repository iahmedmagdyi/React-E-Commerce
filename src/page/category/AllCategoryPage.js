import React from 'react'
import { Container, Row } from 'react-bootstrap'

import CategoryCard from '../../components/Category/CategoryCard'
import clothe from "../../images/clothe.png";
import cat from "../../images/cat2.png";
const AllCategoryPage = () => {
  return (
    <Container>
      <div className='admin-content-text pt-3 m-1' > CATEGORIES</div>
      <Row className="d-flex my-2 justify-content-between">
        <CategoryCard background="#F4DBA4" img={clothe} CardTitle="sale" />
        <CategoryCard background="#F4DBA4" img={cat} CardTitle="sale" />
        <CategoryCard background="#0034ff" img={clothe} CardTitle="sale" />
        <CategoryCard background="#F4DBA4" img={cat} CardTitle="sale" />
        <CategoryCard background="#ff6262" img={clothe} CardTitle="sale" />
        <CategoryCard background="#F4DBA4" img={cat} CardTitle="sale" />
        <CategoryCard background="#F4DBA4" img={clothe} CardTitle="sale" />
        <CategoryCard background="#F4DBA4" img={cat} CardTitle="sale" />
        <CategoryCard background="#0034ff" img={clothe} CardTitle="sale" />
        <CategoryCard background="#F4DBA4" img={cat} CardTitle="sale" />
        <CategoryCard background="#ff6262" img={clothe} CardTitle="sale" />
        <CategoryCard background="#F4DBA4" img={cat} CardTitle="sale" />
      </Row>
      
    </Container>
  )
}

export default AllCategoryPage;
