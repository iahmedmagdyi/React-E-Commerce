import React from "react";
import { Card, Col } from "react-bootstrap";
import laptop from "../../images/labtop.png";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
const CardProduct = () => {
  return (
    <Col xs="6" lg="3" sm="6" md="4" className="d-flex">
      <Card className="my-2"  style={{ width: "18rem" , boxShadow:"0 2px 2px 0 rgba(151,151,151,0.5)" , borderRadius:"10px"  }}>
        <Card.Img variant="top" src={laptop} className="p-3" />
        <Card.Body>
          <div className="d-flex justify-content-end">
          <img src={favoff} alt="df"  />
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img src={rate} alt="fdsd"  />
              <div className="pt-2">4.5</div>
            </div>
            <div className="pt-2" style={{fontWeight:"bold" , lineHeight:"28px" }}>800$</div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProduct;
