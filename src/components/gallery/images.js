import React, { useState } from 'react';

import Styles from "./images.module.scss";

import Image from './image';

const Images = ({images}) => {
    const [imageFocused, setImageFocused] = useState(false);

    return (
        <div id={Styles.images}>
            {imageFocused && <div className={Styles.backdrop}></div>}
            {images?.map((image, index) => {
                return (
                        <Image focusSetter={setImageFocused} image={image} key={index} />
                    )
                })}
        </div>
    )
}

export default Images;