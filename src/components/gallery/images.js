import React from 'react';

import Styles from "./images.module.scss";

import Img from "gatsby-image";

const Images = ({images}) => {

    return (
        <div id={Styles.images}>
            {images?.map((image, index) => <div key={index} className={`${Styles.image_container}`}><div className={Styles.image_wrapper}><Img fluid={image.node.childImageSharp?.fluid} alt={`${index}`} /></div></div>)}
        </div>
    )
}

export default Images;