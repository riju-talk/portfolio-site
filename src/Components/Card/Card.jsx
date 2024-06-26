import React from "react";
import "./Card.css";
import { Row, Col, Image } from "react-bootstrap";

function Card({ id, im, title, description }) {
    return (
        <div className="card" id={id}>
            <Row>
                <Col xs={4} md={4} lg={4} xl={4} sm={4} className="d-flex align-items-center">
                    <Image className="card-img-top modified border" src={im} alt="Card image cap" />
                </Col>
                <Col>
                    <div className="card-body">
                        <div className="card-title">{title}</div>
                        <div className="card-text">{description}</div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Card;
