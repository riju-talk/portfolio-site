import React from "react";
import "./Card.css";
import { Row, Col } from "react-bootstrap";

function Card({ id, title, description, link}) {
    return (
        <div className="card" id={id}>
            <Row>
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
