import React from "react";
import { Container, Row } from "react-bootstrap";
import CardProduct from "./CardProduct";
import SubTitle1 from "../utility/SubTitle";

const CardProductContainer = ({title, btnTitle ,pathText}) => {
  return (
    <Container>
      <SubTitle1 title={title} btnTitle={btnTitle} pathText={pathText} />
      <Row className="d-flex my-2 justify-content-between">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Row>
    </Container>
  );
};

export default CardProductContainer;
