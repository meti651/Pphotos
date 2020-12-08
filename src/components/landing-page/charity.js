import React from 'react';

import Styles from "./charity.module.scss";

import CharityImage from "../../images/charity.jpg";

const Charity = () => {
    return (
        <div id={Styles.container}>
            <div id={Styles.image_wrapper}>
                <div id={Styles.image_border}></div>
                <img src={CharityImage} alt="charity"/>
            </div>
            <div id={Styles.description}>
                Minden fotózás árának 1%-a az év végén felajánlásra kerül rászoruló gyermekek részére!
            </div>
        </div>
    )
}

export default Charity;
