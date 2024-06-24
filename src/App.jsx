import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Social from './Social/Social';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Landing from './Landing/Landing';
function App() {
    return (
        <Container fluid>
        <div className='main-body border rounded-5 overflow-y-auto'>
            <Router>
            <Row className={"row-lg-4"}><Navbar></Navbar></Row>
            <Row className={"row-lg-8"}><Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/social" element={<Social />} />
                </Routes></Row>
            </Router>
        </div>
        </Container>
    );
}

export default App;