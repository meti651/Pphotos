import React from 'react';
import NavigationBox from "./navigationBox";

import Wedding from "../../images/navigationBox/wedding.jpg";
import Family from "../../images/navigationBox/family.jpg";
import Mum from "../../images/navigationBox/mum.jpg";
import Children from "../../images/navigationBox/children.jpg";
import Couple from "../../images/navigationBox/couple.jpg";
import Portrait from "../../images/navigationBox/portrait.jpg";

import Styles from "./navigationBoxes.module.scss";

const images = [
    {image: Wedding, title: "Esküvői"},
    {image: Family, title: "Családi"},
    {image: Mum, title: "Kismama"},
    {image: Children, title: "Gyerek, baba"},
    {image: Couple, title: "Páros"},
    {image: Portrait, title: "Portré"},
]

const links = [
    "/eskuvoi-fotozas",
    "/csaladi-fotozas",
    "/kismama-fotozas",
    "/gyerek-fotozas",
    "/paros-fotozas",
    "/portre-fotozas"
]

const NavigationBoxes = () => {
    return (
        <div id={Styles.container}>
            {images.map((image, index) => <NavigationBox key={index} link={links[index]} image={image}/>)}
        </div>
    )

}

export default NavigationBoxes;
