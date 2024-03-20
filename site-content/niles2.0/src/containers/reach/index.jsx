import React from "react";
import Message from "../message";
function Reach() {
    return (
        <div>
            <h1>Reach out,</h1>
            <Message></Message>
            <div><p className="reach-out-heading">Social</p>
                <div className="row">
                    <div className="col-auto">
                        <a href="https://www.facebook.com" target="_blank">
                            <i className="bi bi-facebook"></i>
                        </a>
                    </div>
                    <div className="col-auto">
                        <a href="https://www.linkedin.com" target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                    <div className="col-auto">
                        <a href="https://www.instagram.com" target="_blank">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                    <div className="col-auto">
                        <a href="https://twitter.com" target="_blank">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                    </div>
                    <div className="col-auto">
                        <a href="https://www.reddit.com" target="_blank">
                            <i className="bi bi-reddit"></i>
                        </a>
                    </div>
                </div>

            </div>
            <div><p className="reach-out-heading">Contact</p></div>
        </div>
    )
}

export default Reach;