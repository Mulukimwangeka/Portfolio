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
<p className="r-id">Hi,I am Ruth Muluki Mwangeka</p>
<br></br>
<p>A developer with experience in web development and a passion for learning new technologies.
<br></br> Here are a few of my recent projects and collaborations:</p>

<br></br>

<div className="row pictures-container">
   <div className="col-md-4">
       <a className="id" href="https://github.com/Mulukimwangeka/superheros" >Superheroes</a>

      <br></br>
      <br></br>
      <img src={logo} className="medium-image" alt="Superheroes"/>
        <br></br>
        <br></br>
      <h6>A Ruby on Rails App</h6>
   </div>
   <div className="col-md-4">
   <a className="id" href="https://github.com/Mulukimwangeka/pizza" >Pizza</a>

      <br></br>
        <br></br>
      <img src={pizza} className="medium-image" alt="Pizza"/>
        <br></br>
        <br></br>
      <h6>A Ruby on Rails App</h6>
   </div>
   <div className="col-md-4">
    <a className="id" href="https://github.com/Sharonah8/Sanaa-Frontend">Sanaa</a>
        <br></br>
        <br></br>
      <img src={sanaa} className="medium-image" alt="Sanaa"/>
        <br></br>
        <br></br>
      <h6>Collaboration Project</h6>
   </div>
</div>
<br></br>
<br></br>
<p>To learn more about my skills and experience, check out my <Link className="id" to="/about">About</Link> page.</p>
</div>
);
};

export default HomePage;
