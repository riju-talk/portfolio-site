import React from "react";
import './styles.css'
import { BsSend } from "react-icons/bs";

function Message() {
    return (
        <div className="wrapper">
            <h2>Communicate with a quick message:</h2>
            <form action="">
                <div className="input-box">
                    <input type="text" placeholder="Name:" required />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email:" required />
                </div>
                <div className="input-box">
                    <textarea placeholder="Message:" required rows={19} />
                </div>
                <div className="send-button">
                    <button type="submit">
                        <span className="button-text">Send</span> <BsSend className="icon" />
                    </button>
                </div>


            </form>
        </div>
    );
}

export default Message;
