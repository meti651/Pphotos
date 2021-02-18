import React, { useState } from "react";
import { Link } from "gatsby";

import Logo from "../images/pphotos-logo.png";
import Styles from "./header.module.scss";

const Header = ({ onTop, isIndex }) => {
	const [open, setOpen] = useState(false);
	const [sideBarOpen, setSideBarOpen] = useState(false);

	const handleSideBarOpen = () => {
		setSideBarOpen((isOpen) => !isOpen);
	};

	const handleServicesOpen = () => {
		setOpen((isOpen) => !isOpen);
	};

	return (
		<header className={`${onTop ? Styles.on_top : undefined} ${isIndex ? Styles.index : Styles.sub}`}>
			<div id={Styles.links}>
				<div className={Styles.part} id={Styles.left_side}>
					<Link to="/">Kezdőlap</Link>
					<div onClick={handleServicesOpen} id={Styles.dropdown}>
						<p>Szolgáltatások</p>
						<div id={Styles.dropdownMenu} className={open ? Styles.open : undefined}>
							<Link to="/szolgaltatasok/csaladi-fotozas">Családi fotózás</Link>
							<Link to="/szolgaltatasok/eskuvoi-fotozas">Esküvői fotózás</Link>
							<Link to="/szolgaltatasok/gyerek-fotozas">Gyermek fotózás</Link>
							<Link to="/szolgaltatasok/kismama-fotozas">Kismama fotózás</Link>
							<Link to="/szolgaltatasok/paros-fotozas">Páros fotózás</Link>
							<Link to="/szolgaltatasok/portre-fotozas">Portré fotózás</Link>
						</div>
					</div>
				</div>
				<div className={Styles.image}>
					<div id={Styles.presentation} style={{ opacity: onTop ? "1" : "0", zIndex: onTop ? "1" : "-1" }}>
						<h1>Baracskai Petra</h1>
						<h2>Pphotos</h2>
					</div>
					<img src={Logo} alt="Logo" />
				</div>
				<div className={Styles.part} id={Styles.right_side}>
					<Link to="/galeria">Galéria</Link>
					<Link to="/kapcsolatok">Kapcsolatok</Link>
				</div>
			</div>
			<div id={Styles.hamburger} onClick={handleSideBarOpen}>
				<div className={Styles.line} id={Styles.up}></div>
				<div className={Styles.line} id={Styles.middle}></div>
				<div className={Styles.line} id={Styles.down}></div>
			</div>
			<div id={Styles.sideBar} className={sideBarOpen ? Styles.viewable : undefined}>
				<Link to="/">Kezdőlap</Link>
				<div onClick={handleServicesOpen} id={Styles.dropdown}>
					<p>Szolgáltatások</p>
					<div id={Styles.services} className={open ? Styles.open : undefined}>
						<Link to="/szolgaltatasok/csaladi-fotozas">Családi fotózás</Link>
						<Link to="/szolgaltatasok/eskuvoi-fotozas">Esküvői fotózás</Link>
						<Link to="/szolgaltatasok/gyerek-fotozas">Gyerek fotózás</Link>
						<Link to="/szolgaltatasok/kismama-fotozas">Kismama fotózás</Link>
						<Link to="/szolgaltatasok/paros-fotozas">Páros fotózás</Link>
						<Link to="/szolgaltatasok/portre-fotozas">Portré fotózás</Link>
					</div>
				</div>
				<Link to="/galeria">Galéria</Link>
				<Link to="/kapcsolatok">Kapcsolatok</Link>
			</div>
		</header>
	);
};

export default Header;
