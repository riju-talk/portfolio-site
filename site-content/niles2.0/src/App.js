import './App.css';
import {Routes, Route, Router} from 'react-router-dom';
import Home from './containers/home';
import Project from './containers/projects';
import Creative from './containers/creatives';
import Reach from './containers/reach';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App container">
      {/* main content */}
      <div className='row'>
        <div className='col-md-9'>
        <div>
        <Routes>
        <Route index path='/' element={<Home />}/>
        <Route path='/creative_room' element={<Creative/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/reach_out' element={<Reach/>}/>
      </Routes>
      </div></div>
        {/* Navbar<vertical> */}
        <div className='col-md-3'><Navbar></Navbar></div>
      </div>
      
    </div>
  );
}

export default App;
