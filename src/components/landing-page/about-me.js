import React from 'react';
import Img from "gatsby-image";

import Styles from "./about-me.module.scss";
import { graphql, useStaticQuery } from 'gatsby';

const AboutMe = () =>{
    const backgroundImage = useStaticQuery(graphql`{
        data: file(relativePath: {eq: "about-me.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
    }`)

    return (
        <div id={Styles.container}>
            <div id={Styles.description}>
                <h1>Magamról</h1>
                <div>
                    Mosolyok, nevetések, azok a bizonyos pillanatok, álmodozás, csoda, kacér összenézések, gyermeki ártatlanság, szépség és jóság. Ezek azok a szavak amik jellemezték eddigi életutamat, és képeimre is egyaránt jellemző. Fő motivációm az, hogy fotózásaim során a képek mellett élményt is nyújtsak számotokra. 
                </div>
                <div>
                    Kamaszkorom meghatározó élménye volt mikor kerületi fotópályázatot nyertem, ekkor éreztem, hogy ez az, amivel foglalkozni szeretnék. A gyermeki lelkesedésem azóta és kitart és segít abban, hogy örök és megismételhetetlen pillanatokat varázsoljak neked.
                </div>
            </div>
            <div id={Styles.in_image_descriptions}>
                <div id={Styles.in_image_description_1}>
                    <div>
                        Különösen kedves számomra mikor egy család életútját kísérhetem végig, ezért
                    </div>
                    <div className={Styles.strong}>
                        a kedvenc témáim közé tartozik az esküvő, a kismama fotózás, az újszülött fotózás és a családi képek, portrék megörökítése.
                    </div>
                </div>
                <div id={Styles.in_image_description_2}>
                    <div>
                        A különböző témák sokszínűsége és váltakozása adja meg számomra a szenvedélyt a munkám iránt és számodra a biztonságot, hogy nem befásult tömegszalag fotókat fogsz látni magadról, hanem
                    </div>
                    <div className={Styles.strong}>
                        élettel teli, valódi, pózmentes képeid lesznek.
                    </div>
                </div>
            </div>
            <div id={Styles.background_image_container}><Img fluid={backgroundImage.data.childImageSharp.fluid} alt="About me"/></div>
            <div id={Styles.end_description}>
                <div>
                    Mint minden téren, fotózásnál is fontos a bizalom,és a hozzáértés. Biztosíthatlak,minden szükséges papírral is rendelkezem.
                </div>
                <div>
                    Egy fotósnak szerencséje, hogy beszélnek helyette a képei is, úgyhogy további információt rólam a Galériában találhatsz.<br/>
                    Petra
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
