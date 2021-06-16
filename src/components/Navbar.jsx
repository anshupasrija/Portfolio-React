import React from 'react'
import'../styles/_navbar.scss';
import logo from '../assests/30.png';

function topbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                 <img src={logo} className="navbar__logo" alt="logo" /></div>
                <ul className="navbar__subcontainer">                   
                    <li className="navbar__list">< a href="#about" className="navbar__link">About</a></li>
                    <li className="navbar__list"><a href="#work"className="navbar__link">Work</a></li>
                    <li className="navbar__list"><a href="#contact"className="navbar__link">Contact</a></li>
                </ul>
            

        </div>
    )
}

export default topbar
