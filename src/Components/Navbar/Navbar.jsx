import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div>{
            <div className="container-fluid" id="top-spacing">
            <nav className="navbar-expand-xxl border rounded-5">
                <ul className="nav justify-content-center nav-justified">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link" id="middle">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/social" className="nav-link">
                            Social
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        }
        </div>
    );
}

export default Navbar;