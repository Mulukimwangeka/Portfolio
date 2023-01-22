import React from "react";
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";




function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <h3 class="navbar-brand text-light" href="#">MyPortfolio</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarText">
      <div className="d-flex">
         
      </div>
      <div className="d-flex">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <Link class="nav-link text-light" to="/">Home</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to="/About">About</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to="/Contact">Contact</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
    
}




export default NavBar