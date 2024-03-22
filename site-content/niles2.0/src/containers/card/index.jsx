import React from "react";
import './styles.css';


function Card({ image, title, discription, sub_title }) {
    return (
        <div>
            <div class="col">
                <div class="card h-100">
                    <img src={image} class="card-img-top img-prop" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title text-color">{title}</h5>
                            <p class="card-text text-color">{discription}</p>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Card;