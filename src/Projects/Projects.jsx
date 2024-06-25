import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Card from "../Components/Card/Card";
import this_site from "../assets/this_site.png";
import "./Projects.css";

function Projects() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <Container fluid>
                <Row><h1>My Projects,</h1></Row>
                <Row>
                    <Col className="d-flex align-items-center" xs={3} sm={3} lg={3} md={3}>
                        <div className="d-flex align-items-stretch">
                            <div className="d-flex border flex-column">
                                <div><h6><a href="#tw" onClick={() => handleScroll("tw")}>This Website</a></h6></div>
                                <div><h6><a href="#slc" onClick={() => handleScroll("slc")}>Sign Language Classifier</a></h6></div>
                                <div><h6><a href="#oes" onClick={() => handleScroll("oes")}>Online Electronics Store - Trinity</a></h6></div>
                                <div><h6><a href="#anttlm" onClick={() => handleScroll("anttlm")}>App for Note Taking and To-do List Making</a></h6></div>
                                <div><h6><a href="#na" onClick={() => handleScroll("na")}>News App</a></h6></div>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex">
                        <div className="border overflow-y-auto projects">
                            <Card im={this_site} id="tw" title="This Website" discription="This website is my stepping stone towards webdev, I had used React.Js using Vite to execute the front end and it also contains a small back end feature which you can see in the /social route, just click on social. This is my 3rd portfolio site, which is responsive for all screen sizes. You can see my certifications and credentials in my resume and on my linked in profile."></Card>
                            <Card im={this_site} id="slc" title="Sign Language Classifier" discription=""></Card>
                            <Card im={this_site} id="oes" title="Online Electronics Store - Trinity" discription="This website is my stepping stone towards webdev, I had used React.Js using Vite to execute the front end and it also contains a small back end feature which you can see in the /social route, just click on social. This is my 3rd portfolio site, which is responsive for all screen sizes. You can see my certifications and credentials in my resume and on my linked in profile."></Card>
                            <Card im={this_site} id="anttlm" title="App for Note Taking and To-do List Making" discription="This website is my stepping stone towards webdev, I had used React.Js using Vite to execute the front end and it also contains a small back end feature which you can see in the /social route, just click on social. This is my 3rd portfolio site, which is responsive for all screen sizes. You can see my certifications and credentials in my resume and on my linked in profile."></Card>
                            <Card im={this_site} id="na" title="News App" discription="This website is my stepping stone towards webdev, I had used React.Js using Vite to execute the front end and it also contains a small back end feature which you can see in the /social route, just click on social. This is my 3rd portfolio site, which is responsive for all screen sizes. You can see my certifications and credentials in my resume and on my linked in profile."></Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;