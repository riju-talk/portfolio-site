import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { motion } from "framer-motion";

function Navbar() {
    const closeOffcanvas = () => {
        const offcanvas = document.getElementById('offcanvasNavbar');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        bsOffcanvas.hide();
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                    <i className="navbar-toggler-icon bi bi-list"></i>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header p-4 ps-5">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        </div>
                        <div className="offcanvas-body adjuster">
                            <ul className="navbar-nav d-flex justify-content-around border rounded-5">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home" onClick={closeOffcanvas}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Projects" onClick={closeOffcanvas}>Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Social" onClick={closeOffcanvas}>Social</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </motion.div>
    );
}

export default Navbar;
