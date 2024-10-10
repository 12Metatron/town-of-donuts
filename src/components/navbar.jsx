import React from "react";
import { Link } from "react-router-dom";
//import "../assets/donut logo.png";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-title"> 
                <img src="../assets/donut logo.png"/>
                <p>Town of Donuts</p>
            </Link>
            <div className="navbar-main">
                <a>Roles</a>
            </div> 

        </nav>
    );
}

export default Navbar;