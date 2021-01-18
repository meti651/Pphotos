import React, {useEffect, useState} from 'react';
import Arrow from "./arrow";
import Img from "gatsby-image";

import Styles from "./slider.module.scss";

const Slider = ({images}) => {
    const [translate, setTranslate] = useState(0);
    const [imageWidth, setImageWidth] = useState();

    useEffect(() => {
        if(window.innerWidth > 1024)  setImageWidth(window.innerWidth/1920 * 0.8 + 290);
        else if(window.innerWidth < 1024 && window.innerWidth > 768) setImageWidth(190);
    }, [window.innerWidth])
    
    return (
        <div id={Styles.container}>
            
            <Arrow direction="left" translate={translate} setTranslate={setTranslate}/>
            <div id={Styles.images_container}>
                {images.map((image,index) => {
                    return(
                        <div key={index} style={{transform: `translateX(-${100 * translate}%)`}} className={Styles.image_wrapper}>
                            <div id={Styles.image_container} style={{width: `${image.childImageSharp.fluid.aspectRatio * imageWidth}px`}}>
                                <Img  fluid={image.childImageSharp.fluid} alt={`${index}`} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <Arrow direction="right" translate={translate} setTranslate={setTranslate}/>
        </div>
    )
}

export default Slider;
