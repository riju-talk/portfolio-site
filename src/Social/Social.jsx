import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import './Social.css';


function Social() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handle_form = () => {
        console.log(name, email, message);
        window.Email.send({
            SecureToken: "7d9e8ac3-b44e-4be8-9fa1-13311aef0c32",
            To: "technosniper.net@gmail.com",
            From: "technosniper.net@gmail.com",
            Subject: "Visitor: Contact Form Submission from Website",
            Body: "<p>Message: " + message + "</p><br/><br/><p>From: " + name + "</p><br/><p>Email: " + email + "</p>"
        }).then(
            message => alert(message + "\n\nEmail sent successfully")
        ).catch(
            error => {
            console.error("Failed to send email:", error); // Log any errors
            alert("Failed to send email. Please try again later.");
            }
        );
    }

    return (
        <div className="px-auto">
            <Helmet>
                <title>Kindly Reach Out</title>
                <meta name="description" content="Social" />
            </Helmet>
            <Container fluid>
                <Row>
                    <TypeAnimation speed={40} wrapper="h1" sequence={["Reach Out,"]} />
                </Row>
                <Row className="grid gap-0 column-gap-5 content">
                    <Col>
                        <motion.div
                            initial={{ opacity: 0, fill: 0.5, translateY: -10 }}
                            animate={{ opacity: 1, fill: 1, translateY: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="border p-4 mt-3 input-field container">
                                <form className="d-flex flex-column input-form">
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
                                        <button type="button" onClick={handle_form} className="btn submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </Col>
                    <Col className="description">
                        <motion.div
                            initial={{ opacity: 0, fill: 0.5 }}
                            animate={{ opacity: 1, fill: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Row className="mt-3">
                                <div>
                                    <p>This website is made and maintained by Rijusmit Biswas know more about me through my social links. Download my resume through the contact section.</p>
                                    <p>
                                        For any inquiries or collaborations, feel free to reach out to me using the contact form above or through my social media channels.
                                        &copy; 2022 Rijusmit Biswas. All rights reserved.
                                    </p>
                                </div>
                            </Row>
                        </motion.div>
                        <Row className="align-items-center">
                            <div className="d-flex flex-column align-items-start justify-content-center">
                                <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.25 } } }} initial="hidden" animate="show" className="links details contiainer py-4 my-3">
                                    <motion.h4 initial={{ opacity: 0, fill: 0.5, translateX: 20 }} animate={{ opacity: 1, fill: 1, translateX: 0 }} transition={{ duration: 1 }} >Social</motion.h4>
                                    <Link to="https://www.linkedin.com/in/rijusmit-biswas-933a3524b/" target="_blank"><i className="bi bi-linkedin px-2 ps-0"></i></Link>
                                    <Link to="https://github.com/riju-talk" target="_blank"><motion.i variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bi bi-github px-2"></motion.i></Link>
                                    <Link to="https://www.facebook.com/profile.php?id=61552744658483" target="_blank"><motion.i variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bi bi-facebook px-2"></motion.i></Link>
                                    <Link to="https://x.com/Phantom_Cloak16" target="_blank"><motion.i variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bi bi-twitter-x px-2"></motion.i></Link>
                                    <Link to="https://www.instagram.com/beyond_the_celestials/" target="_blank"><motion.i variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bi bi-instagram px-2"></motion.i></Link>
                                    <Link to="https://www.reddit.com/user/Niles_18/" target="_blank"><motion.i variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bi bi-reddit px-2"></motion.i></Link>
                                </motion.div>
                                <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.25 } } }} initial="hidden" animate="show" className="links details contiainer py-4 my-3">
                                    <motion.h4 initial={{ opacity: 0, fill: 0.5, translateX: 20 }} animate={{ opacity: 1, fill: 1, translateX: 0 }} transition={{ duration: 1 }} >Contact</motion.h4>
                                    <Link to="mailto:talk.riju@gmail.com" target="_blank"><motion.i variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bi bi-envelope px-2 ps-0"></motion.i></Link>
                                    <Link to="tel:+4733378901" target="_blank"><motion.i variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bi bi-phone px-2"></motion.i></Link>
                                    <Link to="https://wa.me/+918929693930" target="_blank"><motion.i variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bi bi-whatsapp px-2"></motion.i></Link>
                                    <Link to="https://t.me/rb_wb2004" target="_blank"><motion.i variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bi bi-telegram px-2"></motion.i></Link>
                                    <Link to="https://signal.me/#eu/0Potwu6QfoGkINzjGRuQPNYyLjInxjlilIWw2kv0-AMwHefjop5KlZDsVm8kbHce" target="_blank"><motion.i variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bi bi-signal px-2"></motion.i></Link>
                                    <Link to="https://drive.google.com/file/d/1_QAlWwuYznveMqePY5wmX1ZIEtgyAgCI/view?usp=sharing" target="_blank"><motion.i variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="bi bi-file-earmark-person px-2"></motion.i></Link>
                                </motion.div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Social;


//const string = "xghp zhlv rqgw nfby";
