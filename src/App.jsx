import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Social from './Social/Social';
import './App.css';
import Container from 'react-bootstrap/Container';

function App() {
    return (
        <Container fluid>
        <div className='main-body border rounded-5'>
            <Router>
            <Navbar></Navbar>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/social" element={<Social />} />
                </Routes>
            </Router>
        </div>
        </Container>
    );
}

export default App;