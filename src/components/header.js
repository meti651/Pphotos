import React, { useState } from 'react';
import { Link } from "gatsby";

import Logo from "../images/pphotos-logo.png";
import Styles from "./header.module.scss";

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleHover = (_) => {
        setOpen(true);
    }

    const handleBlur = (_) => {
        setOpen(false);
    }

    return (
        <header>
            <div className={Styles.image}>
                <img src={Logo} alt="Logo"/>
            </div>
            <div id={Styles.links}>
                <Link to="/">Kezdőlap</Link>
                <div onMouseEnter={handleHover} onMouseLeave={handleBlur}>Árak/Szolgáltatások V</div>
                {open && 
                <div>
                   <Link to="/szolgaltatasok/csaladi-fotozas">Családi fotózás</Link> 
                   <Link to="/szolgaltatasok/eskuvoi-fotozas">Esküvői fotózás</Link> 
                   <Link to="/szolgaltatasok/gyerek-fotozas">Gyerek fotózás</Link> 
                   <Link to="/szolgaltatasok/kismama-fotozas">Kismama fotózás</Link> 
                   <Link to="/szolgaltatasok/paros-fotozas">Páros fotózás</Link> 
                   <Link to="/szolgaltatasok/portré-fotozas">Portré fotózás</Link>
                </div>}
                <Link to="/galeria">Galéria</Link>
                <Link to="/kapcsolatok">Kapcsolatok</Link>
            </div>
            <div id={Styles.placeholder}></div>
        </header>
    )
}

export default Header;