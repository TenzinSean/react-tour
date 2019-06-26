import React from 'react';
import "./Navbar.scss";
import logo from '../../logo.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo"
                 style={{ width: 80, height: 90, paddingTop: 20}}
            />
            <ul className="nav-link" href="/">
                <li>
                    <a href="" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="" className="nav-link">
                        About
                    </a>
                </li>
                <li>
                    <a href="" className="nav-link">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}
