import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Card from "../Components/Card/Card";

function Projects() {
    return (
        <div>
            <Container fluid>
                <Row><h1>My Projects,</h1></Row>
                <Row>
                    <Col className="d-flex align-middle">
                        <ul className="list-group list-group-flush list-group-numbered">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A fourth item</li>
                            <li className="list-group-item">And a fifth one</li>
                        </ul>
                    </Col>
                    <Col className="">
                        <div className="border overflow-y-auto">
                            <Card></Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;