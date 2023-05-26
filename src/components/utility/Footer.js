import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tele from "../../images/phone.png";
import insta from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";

const Footer = () => {
    return (
        <div
            className="pt-2 mt-2 footer-background footer"
            style={{ maxHeight: "50px" }}
        >
            <Container className="">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col
                        sm="6"

                        className="d-flex align-items-center "
                    >
                        <div className="footer-shroot mx-2 " >Contact Us</div>
                        <div className="mx-2 footer-shroot">Privacy</div>
                        <div className="mx-2 footer-shroot">Legal Notices</div>
                        <div className="mx-2 footer-shroot">Help Center</div>
                    </Col>
                    <Col
                        sm="6"

                        className="d-flex justify-content-end align-items-center "
                    >
                        <div className="d-flex pt-3 mx-2" style={{ cursor: "pointer" }}>
                            <img width="20px" height="20px" src={tele} alt="kh" />
                            <p className="footer-phone">01551242830</p>
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <img width="20px" height="20px" src={facebook} alt="kh" />
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <img width="20px" height="20px" src={insta} alt="kh" />
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <img width="20px" height="20px" src={twitter} alt="kh" />
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Footer;
