import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Social from './Social/Social';
import './App.css';

function App() {
    return (
        <div className='main-body'>
            <Navbar></Navbar>
            <div>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/social" element={<Social />} />
                </Routes>
            </Router>
            </div>
        </div>
    );
}

export default App;