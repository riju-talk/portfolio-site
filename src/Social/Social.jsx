import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import './Social.css';
function Social() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div>
            <Container fluid>
                <Row>
                    <h1>Reach Out,</h1>
                </Row>
                <Row className="grid gap-0 column-gap-5">
                    <Col>
                        <div className="border p-4">
                            <form className="d-flex flex-column">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name">Name: </label>
                                    <input className="form-control" type="text" placeholder="Your name" name="name" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="email">Email: </label>
                                    <input className="form-control" placeholder="your email" type="email" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="message">Message: </label>
                                    <textarea className="form-control text" placeholder="Leave a message here.." name="message" id="message" value={message} onChange={(e) => { setMessage(e.target.value) }} rows="6" />
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
                                    <i className="bi bi-linkedin px-3"></i>
                                    <i className="bi bi-github px-3"></i>
                                    <i className="bi bi-facebook px-3"></i>
                                    <i className="bi bi-twitter-x px-3"></i>
                                    <i className="bi bi-instagram px-3"></i>
                                    <i className="bi bi-reddit px-3"></i>
                                </div>
                                <div className="links details contiainer py-4 my-3">
                                    <h4>Contact</h4>
                                    <i className="bi bi-envelope px-3"></i>
                                    <i className="bi bi-phone px-3"></i>
                                    <i className="bi bi-whatsapp px-3"></i>
                                    <i className="bi bi-telegram px-3"></i>
                                    <i className="bi bi-signal px-3"></i>
                                    <i className="bi bi-file-earmark-person px-3"></i>
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
