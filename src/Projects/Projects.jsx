import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../Components/Card/Card";
import this_site from "../assets/this_site.png";
import "./Projects.css";
import { Pagination } from "react-bootstrap";

function Projects() {
    return (
        <div>
            <Container fluid>
                <Row><h1>My Projects,</h1></Row>
                <Row>
                    <Col>
                        <Row></Row>
                        <Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;
