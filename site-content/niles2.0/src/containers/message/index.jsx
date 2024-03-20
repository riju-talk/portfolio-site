import React from "react";
import './styles.css'
import { BsSend } from "react-icons/bs";

function Message() {
    return (
        <div className="wrapper">
            <h2>Reach me with a quick message:</h2>
            <form action="">
                <div className="input-box">
                    <input type="text" placeholder="Name:"/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email:"/>
                </div>
                <div className="input-box">
                    <textarea placeholder="Message:"rows={19} />
                </div>
                <div className="send-button">
                    <button type="submit" onClick={()=>{alert("This feature is not ready yet, but I am fast learner, I can do this.")}}>
                        <span className="button-text">Send</span>   <BsSend className="icon" />
                    </button>
                </div>


            </form>
        </div>
    );
}

export default Message;
