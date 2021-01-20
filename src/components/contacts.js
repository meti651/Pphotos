import React from 'react';
import {Helmet} from "react-helmet";
import Instagram from "../images/instagram.svg";
import PhoneIcon from "../images/phone-icon.svg";
import EmailIcon from "../images/email-icon.svg";

import Styles from "./contacts.module.scss";

const Contacts = () => {
    return (
        <div id={Styles.container}>
            <Helmet>
                <script async defer crossorigin="anonymous" src="https://connect.facebook.net/hu_HU/sdk.js#xfbml=1&version=v9.0" nonce="vvneLWMJ"></script>
            </Helmet>
            <div className={`${Styles.facebook_container} fb-page`} data-href="https://www.facebook.com/pphotosofficial" data-tabs="" data-width="500" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/pphotosofficial" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/pphotosofficial">Pphotos</a></blockquote></div>
            <div id={Styles.text}>
                <p>Keressetek bátran az alábbi elérhetőségeken!</p>
                <p>Bármilyen kérdésre, ötletre szívesen válaszolok, a közösségi oldalaimra pedig megéri benézni, hiszen sok új tartalmat töltök fel heti szinten.</p>
                <p>Remélem hamarosan együtt fotózhatunk,</p>
                <p>B.Petra</p>
            </div>
            <div id={Styles.instagram}>
                <a href={"https://www.instagram.com/pphotosofficial"} target="_blank" rel="noreferrer"><img id={Styles.icon} src={Instagram} alt="Instagram" /></a>
            </div>
            <div id={Styles.contacts}>
                <div>
                    <img id={Styles.icon} src={PhoneIcon} alt="Phone" />
                    <div>+36203907054</div>
                </div>
                <div>
                    <img id={Styles.icon} src={EmailIcon} alt="Email" />
                    <div><p>baracskai.petra@gmail.com</p></div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;
