import React, {useState, useEffect} from 'react';

import Styles from "./arrow.module.scss";

const Arrow = ({direction, translate, setTranslate}) => {
    const [arrow, setArrow] = useState("");
    const [slideAmount, setSlideAmount] = useState();

    useEffect(() => {
        if(direction === "left") setArrow("<");
        else setArrow(">");
    }, [direction])

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
         return () => window.removeEventListener("resize", resizeHandler);
    }, [])

    const resizeHandler = () => {
        if(window.innerWidth > 1024)  setSlideAmount(3);
        else if(window.innerWidth <= 1024 && window.innerWidth > 768) setSlideAmount(4);
        else if(window.innerWidth > 420 && window.innerWidth <= 768) setSlideAmount(4);
        else if(window.innerWidth <= 420) setSlideAmount(5);
    }

    const handleClick = () => {
        let resultTranslate = translate;
        
        if(direction === "left") resultTranslate--;
        else resultTranslate++;

        if(resultTranslate > slideAmount || resultTranslate < 0) resultTranslate = 0;
        setTranslate(resultTranslate);
    }

    return (
        <button className={Styles.container} id={direction === "right" ? Styles.right : undefined} onClick={handleClick}>
            {arrow}
        </button>
    )
}

export default Arrow;
