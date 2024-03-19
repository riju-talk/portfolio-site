import React from "react";
import './styles.css';


function Card({ image, title, discription ,sub_title}) {
    return (
        <div class="card mb-3">
            <img src={image} class="card-img-top img_prop" alt="project"></img>
            <div class="card-body">
                <h5 class="card-title text-color">{title}</h5>
                <h6 class="card-subtitle mb-2 text-color">{sub_title}</h6>
                <p class="card-text text-color">{discription}</p>
            </div>
        </div>

    );
}

export default Card;