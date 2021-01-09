import React from 'react';

import Styles from "./images.module.scss";

import Img from "gatsby-image";

const Images = ({images}) => {
    console.log(images);
    return (
        <div>
            {images?.map((image, index) => <Img key={index} fluid={image.node.childImageSharp?.fluid} alt={`${index}`} />)}
        </div>
    )
}

export default Images;