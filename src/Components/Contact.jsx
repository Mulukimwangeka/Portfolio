import React from "react";
import "../Styles/Contact.css";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import the icons

const ContactPage = () => {
return (

<div className="container contact-page-container">
<h2>Contact Me</h2>
<p>Thank you for visiting my portfolio. If you have any questions or would like to get in touch, please feel free to contact me through any of the following channels:</p>
<ul className="md">
<li>Email: <a className="a-id" href="mailto:mwangekaruth@gmail.com"><FaEnvelope className="icon" /> mwangekaruth@gmail.com</a></li>
<li>GitHub: <a className="a-id" href="https://github.com/Mulukimwangeka" target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /> https://github.com/Mulukimwangeka</a></li>
<li>LinkedIn: <a className="a-id" href="https://www.linkedin.com/in/ruth-mwangeka-355b42203/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /> https://www.linkedin.com/in/ruth-mwangeka-355b42203/</a></li>
</ul>
</div>
);
};
export default ContactPage;