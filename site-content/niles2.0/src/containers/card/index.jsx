import React from "react";
import './styles.css';


function Card({ image, title, discription, sub_title }) {
    return (
        <div>
            <div className="card" onClick={() => { }}>
                <img src={image} className="card-img-top img_prop" alt="project"></img>
                <div className="card-body">
                    <h5 className="card-title text-color">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-color">{sub_title}</h6>
                    <p className="card-text text-color">{discription}</p>
                </div>
            </div>
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    ...
                </div>
            </div>
        </div>
    );
}

export default Card;