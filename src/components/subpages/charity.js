import React from 'react';

import Styles from "./charity.module.scss";

import CharityImage from "../../images/charity.jpg";

const Charity = () => {
    return (
        <div id={Styles.container}>
            <div id={Styles.description}>
                 &#9829; Minden fotózás árának 1%-a az év végén felajánlásra kerül rászoruló gyermekek részére! &#9829;
            </div>
        </div>
    )
}

export default Charity;
