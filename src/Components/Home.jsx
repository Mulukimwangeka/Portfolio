import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import "../images/superheros.jpeg"
import logo from "../images/wandacartoon.jpeg";
import pizza from "../images/pizza.jpeg";
import sanaa from "../images/sanaa.png";



const HomePage = () => {
return (
<div className="container home-page-container">
<h1>Welcome to My Portfolio</h1>
<p>I am Ruth Muluki Mwangeka,a junior developer with experience in web development and a passion for learning new technologies. Here are a few of my recent projects and colloborations:</p>
<div className="row">

<div className="col-md-4">
<Link to="/project1">
<img src={logo} id="img-mini" className="medium-image"/>
<h3>Superheros</h3>
<h6>A ruby on rails App</h6>
</Link>
</div>
<div className="col-md-4">
<Link to="/project2">
<img src={pizza} id="img-mini" className="medium-image"/>
<h3>Pizza</h3>
<h6>A ruby on rails App</h6>
</Link>
</div>
<div className="col-md-4">
<Link to="/project3">
<img src={sanaa} id="img-mini" className="medium-image"/>
<h3>Sanaa Art</h3>
<h6>Collaborations Project</h6>

</Link>
</div>
</div>
<p>To learn more about my skills and experience, check out my <Link to="/about">about</Link> page.</p>
</div>
);
};

export default HomePage;