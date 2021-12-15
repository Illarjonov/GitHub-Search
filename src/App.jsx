import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Navbar} from './components/NavBar.js'
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Profile} from './pages/Profile';
import {Alert} from './components/Alert'
import {AlertState} from './context/alert/alertState'

function App() {
  return (
    <AlertState>
        <div>
            <Navbar/>
        <div className="container pt-4">
            <Alert alert={ {text: 'test alert'} }/>
            <Routes>
              <Route path = "/"  element = {<Home/>}/>
              <Route path = "/about" element = {<About/>}/>
              <Route path = "/profile/:id" element = {<Profile/>}/>
            </Routes>
        </div>
      </div>
  </AlertState>
  );
}

export default App;
