import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const HomePage = () => {
return (
<div className="container home-page-container">
<h1>Welcome to My Portfolio</h1>
<p>I am Ruth Muluki Mwangeka,a junior developer with experience in web development and a passion for learning new technologies. Here are a few of my recent projects and colloborations:</p>
<div className="row">
<div className="col-md-4">
<Link to="/project1">
<img src="/project1-thumbnail.jpg" alt="Project 1 thumbnail" />
<h3>Project 1</h3>
</Link>
</div>
<div className="col-md-4">
<Link to="/project2">
<img src="/project2-thumbnail.jpg" alt="Project 2 thumbnail" />
<h3>Project 2</h3>
</Link>
</div>
<div className="col-md-4">
<Link to="/project3">
<img src="/project3-thumbnail.jpg" alt="Project 3 thumbnail" />
<h3>Project 3</h3>
</Link>
</div>
</div>
<p>To learn more about my skills and experience, check out my <Link to="/about">about</Link> page.</p>
</div>
);
};

export default HomePage;