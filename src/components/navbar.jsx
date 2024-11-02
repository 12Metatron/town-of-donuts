import React from "react";
import { Link, useLocation } from "react-router-dom";
//import "../assets/donut logo.png";
import "./navbar.css";
//import "../App.css"

function Navbar() {
	const location = useLocation();
	const path = location.pathname;

	return (
		<nav className="navbar">
			<ul className="navlist">
				<Link to="/" className="navbar-title">
					<img
						src={require("../assets/Town_of_Donuts.png")}
						alt="donut logo"
						width="35"
						height="35"
						id="navlogo"
					/>
					<li className={`navbutton ${path === "/" ? "active" : ""}`}>
						Town of Donuts
					</li>
				</Link>
				<div className="navbar-main">
					<Link to="/roles" className="navbar-title">
						<li className={`navbutton ${path === "/roles" ? "active" : ""}`}>
							<span className="habibi-regular"> Roles</span>
						</li>
					</Link>
					{/* <Link to="/about" className="navbar-title">
                        <button className="navbutton">
                            <span className="habibi-regular">About</span>
                        </button>
                    </Link> */}
					<Link to="/rules" className="navbar-title">
						<li className={`navbutton ${path === "/rules" ? "active" : ""}`}>
							<span className="habibi-regular">Rules</span>
						</li>
					</Link>
					<Link to="/achievements" className="navbar-title">
						<li
							className={`navbutton ${path === "/achievements" ? "active" : ""}`}
						>
							<span className="habibi-regular">Achievements</span>
						</li>
					</Link>
				</div>
			</ul>
		</nav>
	);
}

export default Navbar;
