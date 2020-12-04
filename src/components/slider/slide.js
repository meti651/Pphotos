import React from 'react';

import Styles from "./slide.module.scss";

const Slide = ({image, index}) => {
    return (
        <div id={index} className={Styles.container}>
            <div id={Styles.caption}>
                {image.caption}
            </div>
            <img src={image.image} alt="slide"/>
            <div></div>
        </div>
    )
}

export default Slide;
