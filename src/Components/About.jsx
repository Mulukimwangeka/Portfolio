import React from "react";
// import about.css from styles
import "../Styles/About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'




const AboutPage = () => {
return (
<div className="container about-page-container">
<h2>About Me</h2>
<p>I am an upcoming developer with a passion for building web applications and learning new technologies. I have experience with HTML, CSS, JavaScript, Ruby,Rails and React,
<bR></bR> and I am always eager to expand my skillset and tackle new challenges.</p>
<p>I have a strong foundation in Infomation Technology and a desire to use my skills to create meaningful and impactful projects. I believe that effective communication and teamwork are key to success in the tech industry, and I am committed to working collaboratively and delivering high-quality work.</p>
<p>In my free time, I enjoy participating in hackathons and coding challenges to stay up-to-date with the latest trends and technologies in the field.</p>
<h3>Education</h3>
<ul>
<li>Bachelor's Degree in Business Infomation Technology</li>
<li>Web Development Bootcamp at Moringa School</li>
</ul>

<div className="row">
<h3>Skills</h3>
<ul>
<li><FontAwesomeIcon icon={faHtml5} />HTML</li>
<li><FontAwesomeIcon icon={faCss3} />CSS</li>
<li><FontAwesomeIcon icon={faJsSquare} /> JavaScript</li>
<li><FontAwesomeIcon icon={faReact} /> React</li>
<li> Ruby on Rails</li>
</ul>

</div>


</div>
);
};

export default AboutPage;

