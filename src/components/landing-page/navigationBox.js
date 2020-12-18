import { Link } from 'gatsby';
import React from 'react';

import Styles from "./navigationBox.module.scss"

const NavigationBox = ({link, image}) => {
    return (
        <Link href={`/szolgaltatasok${link}`} id={Styles.container}>
            <div id={Styles.image_wrapper}>
                <img src={image.image} alt={image.title}/>
            </div>
            <div id={Styles.title}>
                {image.title}
            </div>
        </Link>
    )
}

export default NavigationBox;
