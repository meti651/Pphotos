import React from 'react';

import SubLayout from "../../components/subpages/subLayout";

import Slide1 from "../../images/slider/wedding/slide1.jpg";
import Slide2 from "../../images/slider/wedding/slide2.jpg";
import Slide3 from "../../images/slider/wedding/slide3.jpg";
import Slide4 from "../../images/slider/wedding/slide4.jpg";
import Slide5 from "../../images/slider/wedding/slide5.jpg";
import Slide6 from "../../images/slider/wedding/slide6.jpg";

const images = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
]

const Wedding = () => {
    return (
        <SubLayout title={"Esküvői fotozás"} slideImages={images}>
            
        </SubLayout>
    )
}

export default Wedding;