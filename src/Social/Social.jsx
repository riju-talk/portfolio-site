import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import './Social.css';
import { Helmet } from "react-helmet";


function Social() {
 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="px-auto">
            <Helmet>
                <title>Kindly Reach Out</title>
                <meta name="description" content="Social" />
            </Helmet>
            <Container fluid>
                <Row>
                    <h1>Reach Out,</h1>
                </Row>
                <Row className="grid gap-0 column-gap-5 content">
                    <Col>
                        <div className="border p-4 mb-5 h-80 w-100">
                            <form className="d-flex flex-column">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name">Name: </label>
                                    <input className="form-control" type="text" placeholder="Your name" name="name" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="email">Email: </label>
                                    <input className="form-control" placeholder="Your email" type="email" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="message">Message: </label>
                                    <textarea className="form-control text" placeholder="Leave a message here.." name="message" id="message" value={message} onChange={(e) => { setMessage(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col>
                        <Row>
                            <div>
                                <p>This website is made and maintained by Rijusmit Biswas know more about me through my social links. Download my resume through the contact section.</p>
                                <p>
                                    For any inquiries or collaborations, feel free to reach out to me using the contact form above or through my social media channels.
                                    &copy; 2022 Rijusmit Biswas. All rights reserved.
                                </p>
                            </div>
                        </Row>
                        <Row className="align-items-center">
                            <div className="d-flex flex-column align-items-start justify-content-center">
                                <div className="links details contiainer py-4 my-3">
                                    <h4>Social</h4>
                                    <i className="bi bi-linkedin px-2 ps-0"></i>
                                    <i className="bi bi-github px-2"></i>
                                    <i className="bi bi-facebook px-2"></i>
                                    <i className="bi bi-twitter-x px-2"></i>
                                    <i className="bi bi-instagram px-2"></i>
                                    <i className="bi bi-reddit px-2"></i>
                                </div>
                                <div className="links details contiainer py-4 my-3">
                                    <h4>Contact</h4>
                                    <i className="bi bi-envelope px-2 ps-0"></i>
                                    <i className="bi bi-phone px-2"></i>
                                    <i className="bi bi-whatsapp px-2"></i>
                                    <i className="bi bi-telegram px-2"></i>
                                    <i className="bi bi-signal px-2"></i>
                                    <i className="bi bi-file-earmark-person px-2"></i>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Social;
