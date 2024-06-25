import React from "react";

function Card({im, title, discription}) {
    return (
        <div>
            <div className="row g-0 position-relative">
                <div className="col-md-4 mb-md-0 p-md-4 border border-custom-color">
                    <img src={im} className="w-100" alt="..."/>
                </div>
                <div className="col-md-8 p-4 ps-md-0">
                    <h5 className="mt-0">{title}</h5>
                    <p>{discription}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;