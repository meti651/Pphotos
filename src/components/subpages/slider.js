import React, {useState} from 'react';
import Arrow from "./arrow";

import Styles from "./slider.module.scss";

const Slider = ({images}) => {
    const [translate, setTranslate] = useState(0);

    return (
        <div id={Styles.container}>
            <Arrow direction="left" translate={translate} setTranslate={setTranslate}/>
            <div id={Styles.images_container}>
                {images.map((image,index) => {
                    return(
                        <div key={index} style={{transform: `translateX(-${30 * translate}vw)`}} className={Styles.image_wrapper}>
                            <img  src={image} alt={index} />
                        </div>
                    )
                })}
            </div>
            <Arrow direction="right" translate={translate} setTranslate={setTranslate}/>
        </div>
    )
}

export default Slider;
