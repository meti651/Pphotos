import React from 'react'

import Styles from "./content.module.scss";

import ContentImage1 from "../../../images/content/family/1.jpg";
import ContentImage2 from "../../../images/content/family/2.jpg";
import ContentImage3 from "../../../images/content/family/3.jpg";
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";

const Content = () => {
    const images = useStaticQuery(graphql`{
        first: file(relativePath: {eq: "content/family/1.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          second: file(relativePath: {eq: "content/family/2.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          third: file(relativePath: {eq: "content/family/3.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
    }`)
    return (
        <div id={Styles.container}>
            <h1>Kedves Édesanyák, Édesapák!</h1>
            <div id={Styles.first_part}>
                <div className={Styles.paragraph}>Családi fotózásnál két fontos szó határozza meg a képeimet: természetesség és élmények.</div>
                <div id={Styles.grid1} className={Styles.paragraph}>Gyerkőcökkel fotózni különleges kaland mind a szülőnek mind nekem. Hagynunk kell, hogy a gyerekek kicsit feloldódjanak, és hááát, olyanok legyenek, mint otthon. Aggodalomra semmi ok, garantálhatom, hogy ilyenkor készülnek a legjobb képek… </div>
                <div className={Styles.image_container} id={Styles.grid2}>
                    <div className={Styles.blur_border} style={{width: `${images.first.childImageSharp.fluid.aspectRatio * 450}px`}}>
                        <Img fluid={images.first.childImageSharp.fluid} alt="kid"/>
                    </div>
                </div>
            </div>
            <div className={Styles.strong}>Családot fotózni mindig nagy öröm számomra, visszatérő vendégeimnél szuper látni ahogy változnak, növekednek a kicsik.</div>
            <div id={Styles.second_part}>
                <div className={Styles.image_container}>
                    <div className={Styles.blur_border} style={{width: `${images.second.childImageSharp.fluid.aspectRatio * 700}px`}}>
                        <Img fluid={images.second.childImageSharp.fluid} alt="kid"/>
                    </div>
                </div>
                <div>
                    <p>Várlak titeket szeretettel, ha szeretnétek: </p>
                    <ul>
                        <li>Évekre szóló emlékeket</li>
                        <li>Beállítás és pózmentem képeket</li>
                        <li>Természetközeli élményeket</li>
                        <li>Sok-sok mosolyt és játékot</li>
                        <li>Elkapott, valódi pillanatokat</li>
                    </ul>
                </div>
                <div className={Styles.image_container}>
                    <div className={Styles.blur_border} style={{width: `${images.third.childImageSharp.fluid.aspectRatio * 700}px`}}>
                        <Img fluid={images.third.childImageSharp.fluid} alt="kid"/>
                    </div>
                </div>
            </div>
            <div className={Styles.strong}>Írjatok vagy hívjatok bátran, örökítsük meg együtt családotok legszebb pillanatait!</div>
        </div>
    )
}

export default Content;
