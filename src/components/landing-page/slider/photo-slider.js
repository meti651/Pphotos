import React, {useState, useRef, useEffect} from 'react';

import Wedding from "../../../images/slider/1.jpg";
import Family from "../../../images/slider/2.jpg";
import Mum from "../../../images/slider/3.jpg";
import Children from "../../../images/slider/4.jpg";
import Couple from "../../../images/slider/5.jpg";
import Portrait from "../../../images/slider/6.jpg";

import Styles from "./photo-slider.module.scss";
import Slide from './slide';
import Arrow from "./arrow";

const slidesElements = [
    {"image": Wedding, "caption": "esküvői", "quote": "A házasság 3 dologról szól: Emlékezni az összetartozásra, elfelejteni egymás hibáit és kitartani egymás mellett mindvégig."}, 
    {"image": Family, "caption": "családi", "quote": "Néha az ember akkor értékeli igazán a pillanatot mikor már emlékké vált."}, 
    {"image": Mum, "caption": "kismama", "quote": "Mikor fotózunk, valójában retúrjegyet veszünk a pillanathoz, ami elmúlt."},
    {"image": Children, "caption": "gyerek", "quote": "Gyermekkor egyet jelent: Egyszerűség. Egy gyermek szemével nézni a világot egyszerűen gyönyörű."},
    {"image": Couple, "caption": "páros", "quote": "Néha azt kívánom bárcsak visszamehetnék az időbe… Nem változtatnék meg semmit csak újra élnem azt a pillanatot."},
    {"image": Portrait, "caption": "portré", "quote": "A fénykép valójában a pillanat megállító gombja."}];

const Slider = () => {
    
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        let slideNum = slide;
        slideNum += 1;
        if(slideNum > 5) setTimeout(() => setSlide(0), 6500);
        else setTimeout(() => setSlide(slideNum), 6500);
    }, [slide])

    return(
        <div id={Styles.container}>
            {slidesElements.map((image, index) => <Slide key={index} image={image} slide={slide}/>)}
        </div>
    )
}

export default Slider;
