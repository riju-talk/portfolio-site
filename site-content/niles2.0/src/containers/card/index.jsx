import React from "react";
import './styles.css';


function Card({ image, title, body }) {
    return (
        <div class="card h-100">
            <img src={image} class="card-img-top img-prop" alt="image-content" />
            <div class="card-body">
                <h3 class="card-title title-color">{title}</h3>
                <p class="card-text content-text-color">{body[0]}</p>
                <p class="card-text content-text-color">{body[1]}</p>
            </div>
        </div>
    );
}

export default Card;