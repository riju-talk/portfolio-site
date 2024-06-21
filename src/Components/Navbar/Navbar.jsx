import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return <div className="w-80 p-3 bar container">
        <nav className="navbar navbar-expand-lg border rounded-5 nav-justified">
            <ul className="nav justify-content-center container">
                <li className="flex-sm-fill text-sm-center nav-item"><Link to="/home" className="nav-link">Home</Link></li>
                <li className="flex-sm-fill text-sm-center nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>
                <li className="flex-sm-fill text-sm-center nav-item"><Link to="/social" className="nav-link">Social</Link></li>
            </ul>
        </nav>
    </div>
}

export default Navbar;