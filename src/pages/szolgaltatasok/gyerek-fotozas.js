import React from 'react';

import SubLayout from "../../components/subpages/subLayout";

import Slide1 from "../../images/slider/child/slide1.jpg";
import Slide2 from "../../images/slider/child/slide2.jpg";
import Slide3 from "../../images/slider/child/slide3.jpg";
import Slide4 from "../../images/slider/child/slide4.jpg";
import Slide5 from "../../images/slider/child/slide5.jpg";
import Slide6 from "../../images/slider/child/slide6.jpg";

const images = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
]

const Child = () => {
    return (
        <SubLayout title={"Gyerek, baba fotozás"} slideImages={images}>
            
        </SubLayout>
    )
}

export default Child;