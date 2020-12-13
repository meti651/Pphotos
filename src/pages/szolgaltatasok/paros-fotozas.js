import React from 'react';
import Image from '../../components/subpages/couple/image';
import Prices from '../../components/subpages/prices-default';

import SubLayout from "../../components/subpages/subLayout";

import Slide1 from "../../images/slider/couple/slide1.jpg";
import Slide2 from "../../images/slider/couple/slide2.jpg";
import Slide3 from "../../images/slider/couple/slide3.jpg";
import Slide4 from "../../images/slider/couple/slide4.jpg";
import Slide5 from "../../images/slider/couple/slide5.jpg";
import Slide6 from "../../images/slider/couple/slide6.jpg";

const images = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide6,
    Slide5,
]

const Couple = () => {
    return (
        <SubLayout title={"Páros fotozás"} slideImages={images}>
            <Prices Image={Image} />
        </SubLayout>
    )
}

export default Couple;