import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { motion } from "framer-motion";

function Navbar() {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        >
            {<div className="container-fluid" id="top-spacing">
            <nav className="navbar-expand-md border rounded-5">
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
        </motion.div>
    );
}

export default Navbar;