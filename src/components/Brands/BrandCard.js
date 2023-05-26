import React from 'react'
import { Card, Col } from 'react-bootstrap';

const BrandCard = ({ img }) => {
    return (
        <Col xs="6" lg="2" sm="6" md="4" className='d-flex justify-content-center' >
            <Card className="my-1"
                style={{
                    width: "100%",
                    height: "151px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF"
                }}>
                <Card.Img variant="top" src={img} style={{width : "100%", height: "151px"}} />
            </Card>
        </Col>
    );

}

export default BrandCard;
