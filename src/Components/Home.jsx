import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import logo from "../images/wandacartoon.jpeg";
import pizza from "../images/pizza.jpeg";
import sanaa from "../images/sanaa.png";


const HomePage = () => {
return (
<div className="container home-page-container">
<h1>Welcome to My Portfolio</h1>
<p>Hi,I am Ruth Muluki Mwangeka</p>

<p>A developer with experience in web development and a passion for learning new technologies.
<br></br> Here are a few of my recent projects and colloborations:</p>

<div className="row pictures-container">
   <div className="col-md-4">
      <Link to="/super">Superhero</Link>
      <img src={logo} className="medium-image" alt="Superheroes"/>
      <h6>A ruby on rails App</h6>
   </div>
   <div className="col-md-4">
      <Link to="/pizza">Pizza</Link>
      <img src={pizza} className="medium-image" alt="Pizza"/>
      <h6>A ruby on rails App</h6>
   </div>
   <div className="col-md-4">
      <Link to="/Sanaa">Sanaa</Link>
      <img src={sanaa} className="medium-image" alt="Sanaa"/>
      <h6>Collaboration Project</h6>
   </div>
</div>




<p>To learn more about my skills and experience, check out my <Link to="/about">about</Link> page.</p>
</div>
);
};

export default HomePage;
