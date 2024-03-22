import React from "react";
import "./styles.css";

function Sections({ image, title, description }) {
    return (
        <div className="card">
            <img src={image} class="card-image fit-selector" alt="content"></img>
            <div className="card-img-overlay card-body">
                <h5 className="card-title text-color">{title}</h5>
                <p className="card-subtitle text-color">{description}</p>
            </div>
        </div>
    );
}

export default Sections;
