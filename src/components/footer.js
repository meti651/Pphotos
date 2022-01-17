import React from "react";

import PhoneIcon from "../images/phone-icon.svg";
import EmailIcon from "../images/email-icon.svg";
import Instagram from "../images/instagram.svg";
import Facebook from "../images/facebook.svg";

import * as Styles from "./footer.module.scss";

const Footer = () => {
	return (
		<footer>
			<div id={Styles.contacts}>
				<h1>Elérhetőségek:</h1>
				<div>
					<img id={Styles.icon} src={PhoneIcon} alt="Phone" />
					<div>+36204933245</div>
				</div>
				<div>
					<img id={Styles.icon} src={EmailIcon} alt="Email" />
					<div>
						<p>pphotosofficial01@gmail.com</p>
					</div>
				</div>
			</div>
			<div id={Styles.placeholder}></div>
			<div id={Styles.icons}>
				<a href={"https://www.facebook.com/pphotosofficial"} target="_blank" rel="noreferrer">
					<img id={Styles.icon} src={Facebook} alt="Facebook" />
				</a>
				<a href={"https://www.instagram.com/pphotosofficial"} target="_blank" rel="noreferrer">
					<img id={Styles.icon} src={Instagram} alt="Instagram" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
