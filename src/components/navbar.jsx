import React from "react";
import { Link } from "react-router-dom";
//import "../assets/donut logo.png";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-title"> 
                <img src={require("../assets/Town_of_Donuts.png")} alt="donut logo" width='50' height='50' id="navlogo"/>
                <button className="navbutton">Town of Donuts</button>
            </Link>
            <div className="navbar-main">
                <Link to="/roles" className="navbar-title"> 
                    <button className="navbutton">Roles</button>
                </Link>
                <Link to="/about" className="navbar-title"> 
                    <button className="navbutton">About</button>
                </Link>
            </div> 

        </nav>
    );
}

export default Navbar;