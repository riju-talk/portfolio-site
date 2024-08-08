import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import { motion } from "framer-motion";

function Navbar() {
    const navigate = useNavigate();
    const handleLinkClick = (path) => {
        navigate(path);
    };

    return (
        <motion.div
            className="px-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <nav className="navbar navbar-expand-xl bg-custom-navbar bg-transparent">
                <div className="container-lg justify-content-around">
                    <button  className="navbar-toggler btn btn-outline-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i className="bi bi-menu-button-wide text-light"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-evenly" >
                    <div className="navbar-nav d-flex justify-content-around w-75 border rounded-51">
                            <div className="nav-item">
                                <Link to="/home" className="nav-link text-white">Home</Link>
                            </div>
                            <div className="nav-item">
                                <Link to="/projects" className="nav-link text-white">Projects</Link>
                            </div>
                            <div className="nav-item">
                                <Link to="/social" className="nav-link text-white">Social</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header bg-custom-navbar">
                    <h5 className="offcanvas-title text-white p-4" id="offcanvasNavbarLabel">Rijusmit</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="bi bi-x-lg"></i></button>
                </div>
                <div className="offcanvas-body bg-dark">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link text-white p-4" onClick={() => handleLinkClick('/home')} data-bs-dismiss="offcanvas">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link text-white p-4" onClick={() => handleLinkClick('/projects')} data-bs-dismiss="offcanvas">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link text-white p-4" onClick={() => handleLinkClick('/social')} data-bs-dismiss="offcanvas">Social</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default Navbar;