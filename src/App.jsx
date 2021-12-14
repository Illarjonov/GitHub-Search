import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Navbar} from './components/NavBar.jsx'
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Profile} from './pages/Profile';

function App() {
  return (
    <div>
        <Navbar/>
    <div className="container pt-4">
        <Routes>
          <Route path = "/" exact element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/profile/:id" element = {<Profile/>}/>
        </Routes>
    </div>
  </div>
  );
}

export default App;
