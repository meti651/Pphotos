import React from 'react'

import SubLayout from "../../components/subpages/subLayout";
import Content from "../../components/subpages/portrait/content";
import Prices from '../../components/subpages/prices-default';

import Slide1 from "../../images/slider/portrait/slide1.jpg";
import Slide2 from "../../images/slider/portrait/slide2.jpg";
import Slide3 from "../../images/slider/portrait/slide3.jpg";
import Slide4 from "../../images/slider/portrait/slide4.jpg";
import Slide5 from "../../images/slider/portrait/slide5.jpg";
import Slide6 from "../../images/slider/portrait/slide6.jpg";

const images = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide6,
    Slide5
]


const Portrait = () => {
    return (
        <SubLayout title="Portré Fotózás" slideImages={images}>
            <Content/>
            <Prices/>
        </SubLayout>
    )
}

export default Portrait;
