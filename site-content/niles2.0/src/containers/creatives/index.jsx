import React from "react";
import './styles.scss';

import image1 from '../../assets/writings.jpg';
import image2 from '../../assets/photography.jpg';
import image3 from '../../assets/banksy.jpg';
import image4 from '../../assets/code_diary.jpg';

function Creative() {
    return (
        <div>
            <h1>Creative Room,</h1>
            <div className="content">
                <div className="d-flex p-2">
                    <div class="card text-bg-dark">
                        <img src={image1} className="card-img img-size" alt="writings" />
                        <div class="card-img-overlay">
                            <h5 className="card-title text-center">Writing</h5>
                            <p className="card-body text-center">My passion and my way of expression. Find my writings by clicking here...</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex p-2">
                    <div class="card text-bg-dark">
                        <img src={image2} className="card-img img-size" alt="pictures" />
                        <div class="card-img-overlay">
                            <h5 className="card-title text-center">Photography</h5>
                            <p className="card-body text-center">I love photography, it's been very recent since I picked it up. Find them here...</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex p-2">
                    <div class="card text-bg-dark">
                        <img src={image3} className="card-img img-size" alt="blog about life" />
                        <div class="card-img-overlay">
                            <h5 className="card-title text-center">Blog about life</h5>
                            <p className="card-body text-center">This is my blog about expreriences. Life is a single player game, let's make it a co-op mission let's share our thoughts..</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex p-2">
                    <div class="card text-bg-dark">
                        <img src={image4} className="card-img img-size" alt="blog about code experiences" />
                        <div class="card-img-overlay">
                            <h5 className="card-title text-center">Blog about Tech</h5>
                            <p className="card-body text-center">This is my tech diary about my experiences in tech. Software, harware or theory it's all just repurposed logic....</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creative;