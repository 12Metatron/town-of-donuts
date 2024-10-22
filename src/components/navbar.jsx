import React from "react";
import { Link } from "react-router-dom";
//import "../assets/donut logo.png";
import "./navbar.css";
//import "../App.css"

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-title"> 
                <img src={require("../assets/Town_of_Donuts.png")} alt="donut logo" width='50' height='50' id="navlogo"/>
                <button className="navbutton">Town of Donuts</button>
            </Link>
            <div className="navbar-main">
                <Link to="/roles" className="navbar-title"> 
                    <button className="navbutton">
                        <span className="habibi-regular"> Roles</span>
                    </button>
                </Link>
                {/* <Link to="/about" className="navbar-title"> 
                    <button className="navbutton">
                        <span className="habibi-regular">About</span>
                    </button>
                </Link> */}
                <Link to="/rules" className="navbar-title"> 
                    <button className="navbutton">
                        <span className="habibi-regular">Rules</span>
                    </button>
                </Link>
                <Link to="/achievements" className="navbar-title"> 
                    <button className="navbutton">
                        <span className="habibi-regular">Achievements</span>
                    </button>
                </Link>
            </div> 

        </nav>
    );
}

export default Navbar;