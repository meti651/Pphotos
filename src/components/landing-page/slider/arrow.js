import React, {useState, useEffect} from 'react';

import Styles from "./arrow.module.scss";

const Arrow = ({direction}) => {
    const [arrow, setArrow] = useState("");

    useEffect(() => {
        if(direction === "left") setArrow("<");
        else setArrow(">");
    }, [])

    return (
        <div className={Styles.container} id={direction === "right" && Styles.right}>
            {arrow}
        </div>
    )
}

export default Arrow;
