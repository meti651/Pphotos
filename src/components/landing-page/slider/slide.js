import React from 'react';

import Styles from "./slide.module.scss";

const Slide = ({image, slide}) => {

    return (
        <div className={Styles.container_wrapper} 
            style={{
                transform: `translateX(-${100*slide}vw)`,
                backgroundImage: `url(${image.image})`
                }}
            >
            <div className={Styles.container}>
                <div id={Styles.caption}>
                    {image.caption}
                </div>
                <div id={Styles.image_container}>
                    <img src={image.image} alt="slide"/>
                </div>
                <div id={Styles.placeholder}></div>
            </div>
            <div className={Styles.quote_container}>
                <p>{image.quote}</p>
            </div>
        </div>
    )
}

export default Slide;
