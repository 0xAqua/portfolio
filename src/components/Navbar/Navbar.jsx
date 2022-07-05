import React, {useState} from 'react';
import {FiInstagram} from "react-icons/fi";
import {FaTwitter} from "react-icons/fa";
import {AiOutlineGithub} from "react-icons/ai";
import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState(false);

    const classToggle = () => {
        setActive(!active)
    }
    return (
        <nav className="navbar">
            <div className="navbarContainer Container">
                <div className="menuBtn">
                    <div id="menuOpenBtn"  className={active ? "active" : ""} onClick={classToggle}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul className="navbarList">
                    <li className="navbarListItem"><a href="">Home</a></li>
                    <li className="navbarListItem"><a href="">About</a></li>
                    <li className="navbarListItem"><a href="">Service</a></li>
                    <li className="navbarListItem"><a href="">Work</a></li>
                    <li className="navbarListItem"><a href="">Blog</a></li>
                    <li className="navbarListItem"><a href="">Contact</a></li>
                    <li className="navbarListItem"><a href=""><FiInstagram /></a></li>
                    <li className="navbarListItem"><a href=""><FaTwitter /></a></li>
                    <li className="navbarListItem"><a href=""><AiOutlineGithub/></a></li>
                </ul>
            </div>
            <div  className={active ? "active" : ""} id="menu">
                <ul className="menuNavbarList">
                    <li className="menuNavbarListItem"><a href="">Home</a></li>
                    <li className="menuNavbarListItem"><a href="">About</a></li>
                    <li className="menuNavbarListItem"><a href="">Service</a></li>
                    <li className="menuNavbarListItem"><a href="">Work</a></li>
                    <li className="menuNavbarListItem"><a href="">Blog</a></li>
                    <li className="menuNavbarListItem"><a href="">Contact</a></li>
                    <li className="menuNavbarListItem"><a href="">Instagram</a></li>
                    <li className="menuNavbarListItem"><a href="">Twitter</a></li>
                    <li className="menuNavbarListItem"><a href="">GitHub</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar