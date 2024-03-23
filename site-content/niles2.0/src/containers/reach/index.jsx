import React from "react";
import Message from "../message";

import './styles.scss'

const socialMediaIcons = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=61552744658483&mibextid=ZbWKwL',
        icon: 'bi bi-facebook',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rijusmit-biswas-933a3524b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        icon: 'bi bi-linkedin',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/beyond_the_celestials?igsh=MThxNHhlbXdtODc3NA==',
        icon: 'bi bi-instagram',
    },
    {
        name: 'Twitter',
        url: 'https://x.com/Phantom_Cloak16?t=EONJ9SCpN3yXCCoF9uIdKQ&s=09',
        icon: 'bi bi-twitter-x',
    },
    {
        name: 'Reddit',
        url: 'https://www.reddit.com/u/Niles_18/s/Zejt6o4qaU',
        icon: 'bi bi-reddit',
    },
];


const contactIcons = [
    {
        name: 'Phone',
        url: 'tel:8929693930',
        icon: 'bi bi-telephone',
    },
    {
        name: 'WhatsApp',
        url: 'https://wa.me/8929693930',
        icon: 'bi bi-whatsapp',
    },
    {
        name: 'Email',
        url: 'mailto:rijusmit.biswas@gmail.com',
        icon: 'bi bi-envelope',
    },
    {
        name: 'Resume',
        url: 'https://drive.google.com/file/d/1fCZ5JF29c7kdn8tHWlHuZIGSXNncjaCm/view?usp=sharing',
        icon: 'bi bi-file-person',
    }
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
