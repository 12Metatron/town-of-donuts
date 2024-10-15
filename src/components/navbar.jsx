import React from "react";
import { Link } from "react-router-dom";
//import "../assets/donut logo.png";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-title"> 
                <img src="../assets/donut_logo.png" alt="donut logo"/>
                <button>Town of Donuts</button>
            </Link>
            <div className="navbar-main">
                <Link to="/" className="navbar-title"> 
                    <button>Roles</button>
                </Link>
                <Link to="/about" className="navbar-title"> 
                    <button>About</button>
                </Link>
            </div> 

        </nav>
    );
}

export default Navbar;