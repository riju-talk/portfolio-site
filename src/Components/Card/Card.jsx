import React from "react";
import "./Card.css";

function Card({id, im, title, discription}) {
    return (
        <div className="card" id={id}>
            <div className="card-body">
                <div className="card-title">
                    {title}
                </div>
                <div className="card-text">
                    {discription}
                </div>
            </div>
        </div>
    );
}

export default Card;