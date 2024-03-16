import './App.css';
import {Routes, Route, Router} from 'react-router-dom';
import Home from './containers/home';
import Project from './containers/projects';
import Creative from './containers/creatives';
import Reach from './containers/reach';


function App() {
  return (
    <div className="App">
      {/* navbar js */}
      {/* navbar */}
      {/* main content */}
      <div className='row'>
        <div className='md-col-9'>Main Content</div>
        <div className='md-col-3'>Header</div>
      </div>
      <Routes>
        <Route index path='/' element={<Home />}/>
        <Route path='/creative_room' element={<Creative/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/reach_out' element={<Reach/>}/>
      </Routes>
    </div>
  );
}

export default App;
