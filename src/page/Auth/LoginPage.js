import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <Container className="d-flex justify-content-center pt-2" style={{ minHeight: "670px" }}>
            <Row >
                <Form  >
                    <Form.Group  className="mb-3  " controlId="formBasicEmail">
                        <Form.Label >Email address</Form.Label>
                        <Form.Control style={{ border : "1px solid #979797" , borderRadius: "8px"}}  type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control style={{ border : "1px solid #979797 " ,  borderRadius: "8px" }} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Button className="btn-login"> Log in</Button>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-end">
                        <div> you already have one?
                            <Link to="/register" style={{ textDecoration: "none" }}>
                                <span > press here</span>
                            </Link>

                        </div>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    );
};

export default LoginPage;
