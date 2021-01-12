import React from "react";

import Styles from "./content.module.scss";
import Img from "gatsby-image";

import { graphql, useStaticQuery } from "gatsby";

const Content = () => {
    const images = useStaticQuery(graphql`{
        first: file(relativePath: {eq: "content/child/1.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        second: file(relativePath: {eq: "content/child/2.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        third: file(relativePath: {eq: "content/child/3.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        fourth: file(relativePath: {eq: "content/child/4.jpg"}) {
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
                <div id={Styles.paragraph}>Gyermekekről képet készíteni tudom, elég nagy kihívás. Aranyosan játszik, de mire odaérünk a telefonunkhoz már elfut, grimaszokat mutat, nem oda néz, bemozdul… </div>
                <div className={Styles.image_container} id={Styles.grid1}>
                    <div className={Styles.blur_border} style={{width: `${images.first.childImageSharp.fluid.aspectRatio * 450}px`}}>
                        <Img fluid={images.first.childImageSharp.fluid} alt="kid" />
                    </div>
                </div>
                <div className={Styles.image_container} id={Styles.grid2}>
                    <div className={Styles.blur_border} style={{width: `${images.second.childImageSharp.fluid.aspectRatio * 750}px`}}>
                        <Img fluid={images.second.childImageSharp.fluid} alt="kid" />
                    </div>
                </div>
            </div>
            <div id={Styles.second_part}>
                <div>Ebben fogok én nektek segíteni, hogy minőségi és szuper aranyos képeket láthassatok a gyerkőcökről és büszkén adhassátok ajándékba akár a nagyszülőknek, barátoknak is. </div>
                <div>A gyermekfotózás számomra is mindig nagy kihívás, de ez benne a csodálatos. Külön öröm számomra mikor látom a büszkeséget a szülők arcán az átadott képek után. </div>
            </div>
            <div className={Styles.image_container} >
                <div className={Styles.blur_border} style={{width: `${images.third.childImageSharp.fluid.aspectRatio * 450}px`}}>
                    <Img fluid={images.third.childImageSharp.fluid} alt="kid"/>
                </div>
            </div>
            
            <h2>Újszülött fotózás:</h2>
            <div>2 hetes korig érdemes elkészíteni az újszülött fotókat. Ezután a picurkák napról napra egyre jobban változnak, nyugodtabb alvós képekre ekkor van lehetőség. Szívesen elmegyek akár az otthonotokba, de stúdióba is jöhettek. Ruhákkal, kiegészítőkkel pedig igény esetén készülök nektek. </div>
            <div className={Styles.image_container} id={Styles.narrow_image}>
                <div className={Styles.blur_border} style={{width: `${images.fourth.childImageSharp.fluid.aspectRatio * 450}px`}}>
                    <Img fluid={images.fourth.childImageSharp.fluid} alt="kid" />
                </div>
            </div>
            <div>Várlak benneteket sok szeretettel akár gyermeketek megszületésekor vagy a babás korszakban, születésnapokon, vagy bármely átlagos hétköznapi napon mikor kedvetek van kicsit kilépni a megszokottakból! </div>
        </div>
    )
}

export default Content;