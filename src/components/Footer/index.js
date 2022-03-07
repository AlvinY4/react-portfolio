// Footer with Github and Linkedin Links/Icons
import React from 'react'; 
import { FaGithub, FaLinkedin } from "react-icons/fa"; 

function Footer() {
    return (
        <div className="footer-div">
            <footer>
                <ul>
                    <a href="https://github.com/AlvinY4" target="blank">
                        <li>
                            <FaGithub />
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/alvinyearby/" target="blank">
                        <li>
                            <FaLinkedin />
                        </li>
                    </a>
                </ul>
            </footer>
        </div>
    ); 
}; 


export default Footer; 