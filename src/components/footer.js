import React from 'react';

import PhoneIcon from "../images/phone-icon.svg";
import EmailIcon from "../images/email-icon.svg";
import Instagram from "../images/instagram.svg";
import Facebook from "../images/facebook.svg";

import Styles from "./footer.module.scss";
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <footer>
            <div id={Styles.contacts}>
                <h1>Elérhetőségek:</h1>
                <div>
                    <img id={Styles.icon} src={PhoneIcon} alt="Phone" />
                    <div>+36203907054</div>
                </div>
                <div>
                    <img id={Styles.icon} src={EmailIcon} alt="Email" />
                    <div><p>baracskai.petra@gmail.com</p></div>
                </div>
            </div>
            <div id={Styles.placeholder}></div>
            <div id={Styles.icons}>
                <Link to={"https://www.facebook.com/pphotosofficial"} target="_blank"><img id={Styles.icon} src={Facebook} alt="Facebook" /></Link>
                <Link to={"https://www.instagram.com/pphotosofficial"} target="_blank"><img id={Styles.icon} src={Instagram} alt="Instagram" /></Link>
            </div>
        </footer>
    )
}

export default Footer;
