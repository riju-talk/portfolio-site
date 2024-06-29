import React from "react";
import "./Card.css";
import { Row, Col, Image } from "react-bootstrap";

function Card({ id, im, title, description, link}) {
    return (
        <div className="card" id={id}>
            <Row>
                <Col xs={4} md={4} lg={4} xl={4} sm={4} className="d-flex align-items-center ps-4">
                    <Image className="card-img-top modified border" src={im} alt="Card image cap ps-3" />
                </Col>
                <Col>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={link} className="btn stretched-link">Visit the Repo <i class="bi bi-box-arrow-up-right"></i></a>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Card;
