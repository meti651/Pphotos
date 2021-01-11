import React from 'react';

import Styles from "./images.module.scss";

import Img from "gatsby-image";

const Images = ({images}) => {

    const ClickHandler = ({target}) => {
        target.closest("div").parentNode.parentNode.classList.toggle(Styles.focus);
        if(target.closest("div").parentNode.parentNode.classList.contains("true")) console.log("true");
    }

    return (
        <div id={Styles.images}>
            {images?.map((image, index) => <div key={index} className={`${Styles.image_container} ${image.node.childImageSharp.fluid.aspectRatio > 1}`} onClick={ClickHandler}><div className={Styles.image_wrapper}><Img fluid={image.node.childImageSharp?.fluid} alt={`${index}`} /></div></div>)}
        </div>
    )
}

export default Images;