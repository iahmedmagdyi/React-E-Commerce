import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptops from "../../images/laptops.png";
const DiscountSection = () => {
  return (
    <Container>
      <Row className="mx-2 discount-background d-flex align-items-center text-center mx-3">
        <Col >
          <p className="discount-title"> SALE ON Laptops up to 30%</p>
        </Col>
        <Col>
          <img src={laptops} alt=""  className="discount-img"/>
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
