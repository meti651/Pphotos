import React, { useState, useEffect} from 'react';
import { Link } from "gatsby";

import Logo from "../images/pphotos-logo.png";
import Styles from "./header.module.scss";

const Header = ({onTop}) => {
    const [open, setOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        if(!onTop || isHovered) setIsDisplayed(true);
        else setIsDisplayed(false);
    }, [onTop, isHovered])

    const handleHover = (_) => {
        setOpen(true);
    }

    const handleBlur = (_) => {
        setOpen(false);
    }

    const handleHeaderHovering = () => {
        setIsHovered(true);
    }

    const handleHeaderBlur = () => {
        setIsHovered(false);
    }

    return (
        <header style={{"opacity": isDisplayed ? "100%" : "20%"}} onMouseEnter={handleHeaderHovering} onMouseLeave={handleHeaderBlur}>
            <div className={Styles.image} >
                <img src={Logo} alt="Logo" />
            </div>
            <div id={Styles.links} >
                <Link to="/">Kezdőlap</Link>
                <div onMouseEnter={handleHover} onMouseLeave={handleBlur} id={Styles.dropdown}>
                    <p>Árak/Szolgáltatások</p>
                    <div id={Styles.dropdownMenu} className={open && Styles.open}>
                        <Link to="/szolgaltatasok/csaladi-fotozas">Családi fotózás</Link> 
                        <Link to="/szolgaltatasok/eskuvoi-fotozas">Esküvői fotózás</Link> 
                        <Link to="/szolgaltatasok/gyerek-fotozas">Gyerek fotózás</Link> 
                        <Link to="/szolgaltatasok/kismama-fotozas">Kismama fotózás</Link> 
                        <Link to="/szolgaltatasok/paros-fotozas">Páros fotózás</Link> 
                        <Link to="/szolgaltatasok/portré-fotozas">Portré fotózás</Link>
                    </div>   
                </div>
                <Link to="/galeria">Galéria</Link>
                <Link to="/kapcsolatok">Kapcsolatok</Link>
            </div>
            <div id={Styles.placeholder}></div>
        </header>
    )
}

export default Header;