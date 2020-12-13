import React from 'react';
import Content from '../../components/subpages/mum/content';
import Image from '../../components/subpages/mum/image';
import Prices from '../../components/subpages/prices-default';

import SubLayout from "../../components/subpages/subLayout";

import Slide1 from "../../images/slider/mum/slide1.jpg";
import Slide2 from "../../images/slider/mum/slide2.jpg";
import Slide3 from "../../images/slider/mum/slide3.jpg";
import Slide4 from "../../images/slider/mum/slide4.jpg";
import Slide5 from "../../images/slider/mum/slide5.jpg";
import Slide6 from "../../images/slider/mum/slide6.jpg";

const images = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
]

const Mum = () => {
    return (
        <SubLayout title={"Kismama fotozás"} slideImages={images}>
            <Content/>
            <Prices Image={Image} />
        </SubLayout>
    )
}

export default Mum;