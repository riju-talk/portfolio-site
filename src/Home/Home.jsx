import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import { Container, Image } from "react-bootstrap";
import image from "../assets/delhi_metro.jpg";

function Home() {
    return (
        <div>
            <Container fluid className="justify-content-center">
                <Row>
                    <h1>Hello There,</h1>
                </Row>
                <Row className="grid gap-0 column-gap-5 content">
                    <Col className="align-items-center mb-5">
                        <div className="d-flex flex-column gx-5 h-75">
                            <p className="discription">My name is Rijusmit Biswas A.K.A Niles Drake I am Geek (lol). But, yes I am a nerd who is a nut for code and sci-fi flicks. I am a novice programmer with knowledge and efficiency in several programming languages and technologies.</p>
                            <p className="discription">I am also a web developer by choice and passion. I am a writer who is currently working on web novels you can find on known pages. I love to connect and collaborate with a lot of people. I am 20 years old and I am an undergrad at IIIT-Delhi, pursuing my Bachelors in computer science and social science. I aspire to learn and become a researcher in machine learning. My current expertise lies in UI/UX, Web Development and Ethnography.</p>
                            <p className="discription">I also love photography and also writing and I have an ever growing tech stack and a consistent thirst for knowledge.</p>
                        </div>
                    </Col>
                    <Col className="container-fluid align-items-center mb-5 ">
                        <div className="p-3">
                            <Image src={image} style={{ border: "#83a79c" }} className="object-fit-cover border rounded border-image ratio ratio-4x3" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;