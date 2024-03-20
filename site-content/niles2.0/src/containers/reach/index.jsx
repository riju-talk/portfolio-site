import React from "react";
import Message from "../message";

import './styles.scss'

const socialMediaIcons = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com',
        icon: 'bi bi-facebook',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com',
        icon: 'bi bi-linkedin',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com',
        icon: 'bi bi-instagram',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com',
        icon: 'bi bi-twitter-x',
    },
    {
        name: 'Reddit',
        url: 'https://www.reddit.com',
        icon: 'bi bi-reddit',
    },
];


const contactIcons = [
    {
        name: 'Phone',
        url: 'https://www.facebook.com',
        icon: 'bi bi-telephone',
    },
    {
        name: 'WhatsApp',
        url: 'https://www.facebook.com',
        icon: 'bi bi-whatsapp',
    },
    {
        name: 'Email',
        url: 'https://www.linkedin.com',
        icon: 'bi bi-envelope',
    },
];

function Reach() {
    return (
        <div>
            <h1>Reach out,</h1>
            <Message />
            <div className="links">
                <div className="social">
                    <h4 className="reach-out-heading">Social</h4>
                    <div className="social-icons">
                        {socialMediaIcons.map((icon, index) => (
                            <span className="social-icon">
                                <a href={icon.url} target="_blank" rel="noopener noreferrer">
                                    <i className={icon.icon}></i>
                                </a>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="social">
                    <h4 className="reach-out-heading">Contact</h4>
                    <div className="social-icons">
                        {contactIcons.map((icon, index) => (
                            <span className="social-icon">
                                <a href={icon.url} target="_blank" rel="noopener noreferrer">
                                    <i className={icon.icon}></i>
                                </a>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reach;
