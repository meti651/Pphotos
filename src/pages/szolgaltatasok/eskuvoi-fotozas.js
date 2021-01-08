import React from 'react';
import Album from '../../components/landing-page/album';
import Prices from '../../components/subpages/prices-wedding';

import SubLayout from "../../components/subpages/subLayout";
import Content from '../../components/subpages/wedding/content';

import Slide1 from "../../images/slider/wedding/slide1.jpg";
import Slide2 from "../../images/slider/wedding/slide2.jpg";
import Slide3 from "../../images/slider/wedding/slide3.jpg";
import Slide4 from "../../images/slider/wedding/slide4.jpg";
import Slide5 from "../../images/slider/wedding/slide5.jpg";
import Slide6 from "../../images/slider/wedding/slide6.jpg";

const images = [
    Slide2,
    Slide5,
    Slide1,
    Slide4,
    Slide3,
    Slide6,
]

const Wedding = () => {
    return (
        <SubLayout title={"Esküvői fotozás"} slideImages={images}>
            <Content/>
            <Prices/>
            <Album/>
        </SubLayout>
    )
}

export default Wedding;