import React from 'react';
import Img from "gatsby-image";

import Styles from "./slide.module.scss";

const Slide = ({image, slide}) => {

    return (
        <>
        <div className={Styles.container_wrapper} 
            style={{
                transform: `translateX(-${100*slide}%)`
                }}
            >
            <div id={Styles.background_image}><Img fluid={image.image.childImageSharp.fluid} alt="background" /></div>
            <div className={Styles.container}>
                <div id={Styles.placeholder}></div>
                <div id={Styles.image_container} >
                    <Img fluid={image.image.childImageSharp.fluid} alt="slide"/>
                </div>
                <div id={Styles.caption}>
                    {image.caption}
                </div>
            </div>
        </div>
        </>
    )
}

export default Slide;
