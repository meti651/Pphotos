import React, { useState} from 'react';
import { Link } from "gatsby";

import Logo from "../images/pphotos-logo.png";
import Styles from "./header.module.scss";

const Header = ({onTop}) => {
    const [open, setOpen] = useState(false);

    const handleHover = (_) => {
        setOpen(true);
    }

    const handleBlur = (_) => {
        setOpen(false);
    }

    return (
        <header className={onTop ? Styles.on_top : undefined}>
            <div id={Styles.links} >
                <div className={Styles.part} id={Styles.left_side}>
                    <Link to="/">Kezdőlap</Link>
                    <div onMouseEnter={handleHover} onMouseLeave={handleBlur} id={Styles.dropdown}>
                        <p>Árak/Szolgáltatások</p>
                        <div id={Styles.dropdownMenu} className={open ? Styles.open : undefined}>
                            <Link to="/szolgaltatasok/csaladi-fotozas">Családi fotózás</Link> 
                            <Link to="/szolgaltatasok/eskuvoi-fotozas">Esküvői fotózás</Link> 
                            <Link to="/szolgaltatasok/gyerek-fotozas">Gyerek fotózás</Link> 
                            <Link to="/szolgaltatasok/kismama-fotozas">Kismama fotózás</Link> 
                            <Link to="/szolgaltatasok/paros-fotozas">Páros fotózás</Link> 
                            <Link to="/szolgaltatasok/portre-fotozas">Portré fotózás</Link>
                        </div>   
                    </div>
                </div>
                <div className={Styles.image} >
                    <div id={Styles.presentation} style={{opacity: onTop ? "1" : "0"}}>
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
        </header>
    )
}

export default Header;