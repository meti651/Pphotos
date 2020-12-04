import React, {useState, useRef} from 'react';

import Wedding from "../../images/slider/1.jpg";
import Family from "../../images/slider/2.jpg";
import Mum from "../../images/slider/3.jpg";
import Children from "../../images/slider/4.jpg";
import Couple from "../../images/slider/5.jpg";
import Portrait from "../../images/slider/6.jpg";

import Styles from "./photo-slider.module.scss";
import Slide from './slide';
import Arrow from "./arrow";

const Slider = () => {
    const slidesElements = useRef([
        {"image": Wedding, "caption": "esküvői"}, 
        {"image": Family, "caption": "családi"}, 
        {"image": Mum, "caption": "kismama"},
        {"image": Children, "caption": "gyerek"},
        {"image": Couple, "caption": "páros"},
        {"image": Portrait, "caption": "portré"}]);
    const [index, setIndex] = useState(0);

    return(
        <div id={Styles.container}>
            {slidesElements.current.map((image, index) => <Slide key={index} image={image} index={index}/>)}
        </div>
    )
}

export default Slider;
