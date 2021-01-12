import React from 'react';
import NavigationBox from "./navigationBox";

import Wedding from "../../images/navigationBox/wedding.jpg";
import Family from "../../images/navigationBox/family.jpg";
import Mum from "../../images/navigationBox/mum.jpg";
import Children from "../../images/navigationBox/children.jpg";
import Couple from "../../images/navigationBox/couple.jpg";
import Portrait from "../../images/navigationBox/portrait.jpg";

import Styles from "./navigationBoxes.module.scss";
import { graphql, useStaticQuery } from 'gatsby';

const links = [
    "/eskuvoi-fotozas",
    "/csaladi-fotozas",
    "/kismama-fotozas",
    "/gyerek-fotozas",
    "/paros-fotozas",
    "/portre-fotozas"
]

const NavigationBoxes = () => {
    const images = useStaticQuery(graphql`{
        wedding: file(relativePath: {eq: "navigationBox/wedding.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        family: file(relativePath: {eq: "navigationBox/family.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        mum: file(relativePath: {eq: "navigationBox/mum.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          children: file(relativePath: {eq: "navigationBox/children.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          couple: file(relativePath: {eq: "navigationBox/couple.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          portrait: file(relativePath: {eq: "navigationBox/portrait.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
    }`)

    const boxes = [
        {image: images.wedding, title: "Esküvői"},
        {image: images.family, title: "Családi"},
        {image: images.mum, title: "Kismama"},
        {image: images.children, title: "Gyerek, baba"},
        {image: images.couple, title: "Páros"},
        {image: images.portrait, title: "Portré"},
    ]

    return (
        <div id={Styles.container}>
            {boxes.map((image, index) => <NavigationBox key={index} link={links[index]} image={image}/>)}
        </div>
    )

}

export default NavigationBoxes;
