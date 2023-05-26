import React from "react";
import { Col } from "react-bootstrap";

const CategoryCard = ({ CardTitle, background, img }) => {
  return (
    <Col xs="6" lg="2" sm="6" md="4" className="d-flex justify-content-around my-4">
      <div className="allCategory mb-3">
        <div
          className="category-card"
          style={{ background: `${background}` }}
        ></div>
        <img className="category-card-img" src={img} alt="jgh" />
        <p className="card-title-text my-2">{CardTitle}</p>
      </div>
    </Col>
  );
};

export default CategoryCard;
