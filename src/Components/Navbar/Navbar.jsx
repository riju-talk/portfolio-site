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
        </motion.div>
    );
}

export default Navbar;