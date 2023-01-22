import React from 'react';
import './Styles/App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/footer';
import Super from './Components/Super';
import Pizza from './Components/Pizza'
import Sanaa from './Components/Sanaa'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/super" element={<Super/>} />
        <Route exact path="/Pizza" element={<Pizza/>} />
        <Route exact path="/Sanaa" element={<Sanaa/>} />
      </Routes>
      
      
      <Footer />
    </div>
  );
}


export default App;
