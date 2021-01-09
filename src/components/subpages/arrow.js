import React, {useState, useEffect} from 'react';

import Styles from "./arrow.module.scss";

const Arrow = ({direction, translate, setTranslate}) => {
    const [arrow, setArrow] = useState("");

    useEffect(() => {
        if(direction === "left") setArrow("<");
        else setArrow(">");
    }, [direction])

    const handleClick = () => {
        let resultTranslate = translate;
        
        if(direction === "left") resultTranslate--;
        else resultTranslate++;

        if(resultTranslate > 3 || resultTranslate < 0) resultTranslate = 0;
        setTranslate(resultTranslate);
    }

    return (
        <button className={Styles.container} id={direction === "right" ? Styles.right : undefined} onClick={handleClick}>
            {arrow}
        </button>
    )
}

export default Arrow;
