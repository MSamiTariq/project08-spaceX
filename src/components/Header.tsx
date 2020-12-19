import React from "react";
import "./Header.modules.css";
import { Nav, Navbar } from "react-bootstrap";
import Rocket from "../images/head.png";
import { animateScroll as scroll, Link as lin } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Navbar
			collapseOnSelect
			className="header-container"
			expand="md"
			bg="none"
			variant="dark"
		>
			<Navbar.Brand className="px-5 logo" onClick={() => scroll.scrollToTop()}>
				<Link to="/">
					<img src={Rocket} alt="" />
				</Link>
			</Navbar.Brand>
			<Navbar.Collapse
				className="justify-content-end px-5"
				id="responsive-navbar-nav"
			>
				<Nav>
					<Link to="/" className="navLink">
						Home
					</Link>
					<Link to="missionList" className="navLink">
						TimeLine
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
