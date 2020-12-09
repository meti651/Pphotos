import React from 'react';
import Arrow from "../landing-page/slider/arrow";

import Styles from "./slider.module.scss";

const Slider = ({images}) => {
    return (
        <div id={Styles.container}>
            <Arrow direction="left"/>
            <div id={Styles.images_container}>
                {images.map((image,index) => <img key={index} src={image} alt={index}/>)}
            </div>
            <Arrow direction="right" />
        </div>
    )
}

export default Slider;
