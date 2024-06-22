import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div className="container-fluid" id="top-spacing">
            <nav className="navbar-expand-xxl border rounded-5">
                <ul class="nav justify-content-center nav-justified">
                    <li class="nav-item">
                        <Link to="/home" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/projects" className="nav-link" id="middle">
                            Projects
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/social" className="nav-link">
                            Social
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;