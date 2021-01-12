import React from 'react';

import Styles from "./content.module.scss";

import Img from "gatsby-image";

import { graphql, useStaticQuery } from 'gatsby';

const Content = () => {
    const images = useStaticQuery(graphql`{
        lined: file(relativePath: {eq: "content/wedding/lined.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        content1: file(relativePath: {eq: "content/wedding/content1.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        content2: file(relativePath: {eq: "content/wedding/content2.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        content3: file(relativePath: {eq: "content/wedding/content3.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
    }`)

    return (
        <div id={Styles.container}>
            <h1>Kedves Menyasszonyok, Vőlegények!</h1>
            <div id={Styles.lined}>
                <div id={Styles.phrases}>
                    <p>Életetek egyik, ha nem a legfontosabb napja, a házasságkötés.</p>
                    <p>Ez a nap Rólatok szól, csakis Kettőtökről, szeretteitek körében.</p>
                    <p>Dekorációk, ételek, öltözékek, minden, ami színessé varázsolja a nemes alkalmat.</p>
                    <p>Az esküvő legszebb, s legfontosabb pillanatainak megörökítése jelentős tényező.</p>
                    <p>Ebben szeretnék Nektek segíteni.</p>
                </div>
                <div className={Styles.image_wrapper}>
                    <div className={Styles.blur_border}>
                        <div className={Styles.image}>
                            <Img fluid={images.lined.childImageSharp.fluid} className={Styles.wide_image} alt="portrait"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id={Styles.second_part}>
                <div className={Styles.image_wrapper}>
                    <div className={Styles.blur_border}>
                        <div className={Styles.image} style={{width: `${images.content1.childImageSharp.fluid.aspectRatio * 20}vw`}}>
                            <Img fluid={images.content1.childImageSharp.fluid} className={Styles.wide_image} alt="portrait"/>
                        </div>
                    </div>
                </div>
                <div id={Styles.text}>
                    <p>A Ti esküvőtökön ugyanolyan odaadással fotózom, mintha csak a sajátom lenne.</p>
                    <p>Kezdve a készülődés pillanataitól, az oltárhoz vezetésen át, egészen a záró pillanatokig.</p>
                </div>
                <div className={Styles.image_wrapper}>
                    <div className={Styles.blur_border}>
                        <div className={Styles.image} style={{width: `${images.content2.childImageSharp.fluid.aspectRatio * 20}vw`}}>
                            <Img fluid={images.content2.childImageSharp.fluid} className={Styles.wide_image} alt="portrait"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id={Styles.third_part}>
            <div className={Styles.image_wrapper}>
                    <div className={Styles.blur_border}>
                        <div className={Styles.image} style={{width: `${images.content3.childImageSharp.fluid.aspectRatio * 30}vw`}}>
                            <Img fluid={images.content3.childImageSharp.fluid} className={Styles.wide_image} alt="portrait"/>
                        </div>
                    </div>
                </div>
                <div className={Styles.text}>
                    <div id={Styles.top}>
                        <p>Kizárólag minőségi, szerkesztett fotókat adok át Nektek. Csak olyan képet adok ki a kezemből, amilyet én is látni szeretnék.</p>
                        <p>Az esküvő után pedig ezek a képek emlékeztetnek majd Titeket a napra, amikor kimondtátok azt a bizonyos igent.</p>
                    </div>    
                    <p id={Styles.bottom}>Szeretném, ha a képeket nézegetve azt éreznétek, mintha épp az esküvőtökön lennétek, hogy újra átélhessétek a legszebb pillanatokat családotok, szeretteitek körében, és majd büszkén mutathassátok akár gyermekeiteknek.</p>
                </div>
            </div>
            <p><strong>Szeretettel várlak Titeket, s megtiszteltek vele, ha életetek egyik legszebb napját én örökíthetem meg.</strong></p>
            <div id={Styles.photo_given}>
                <h2>Képátadás 2 héten belül</h2>
                <p>Mivel tudom, hogy izgatottan várjátok a képeket, ezért az <strong>esküvőt követő másnapon már elküldök nektek 5db retusált fotót</strong>, hogy ne a telefonos képeket kelljen nézegetni, és legyen lehetőség akár már másnap profi képet megosztani.</p>
            </div>
        </div>
    )
}

export default Content;