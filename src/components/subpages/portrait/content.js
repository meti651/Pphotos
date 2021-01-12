import React from 'react';
import Img from "gatsby-image";

import WideCenter from "../../../images/content/portrait/wide.jpg";
import NarrowLeft from "../../../images/content/portrait/narrow-left.jpg";
import NarrowRight from "../../../images/content/portrait/narrow-right.jpg";

import Styles from "./content.module.scss";
import { graphql, useStaticQuery } from 'gatsby';

const Content = () => {
    const images = useStaticQuery(graphql`{
        wideCenter: file(relativePath: {eq: "content/portrait/wide.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        narrowLeft: file(relativePath: {eq: "content/portrait/narrow-left.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        narrowRight: file(relativePath: {eq: "content/portrait/narrow-right.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
    }`)
    return(
        <div id={Styles.container}>
            <h1>Kedves leendő Modellem!</h1>
            <div className={Styles.part_wrapper}>
                <div id={Styles.first_paragraph}>
                    <p>Tudtad, hogy fél másodperc elég ahhoz, hogy jó vagy rossz benyomást keltsünk?</p>
                    <p className={Styles.strong}>Ezért is fontos, hogy milyen tartalmakat osztunk meg, milyen kép szerepel az önéletrajzunkban hiszen az első benyomás ereje megismételhetetlen.</p>
                </div>
                <div className={Styles.image_wrapper}>
                    <div className={`${Styles.blur_border}`}  style={{width: `${images.wideCenter.childImageSharp.fluid.aspectRatio * 350}px`}}>
                        <Img fluid={images.wideCenter.childImageSharp.fluid} alt="portrait"/>
                    </div>
                </div>
                <div id={Styles.second_paragraph}>
                    <p>Manapság, a fényképeknek van talán az egyik legmeghatározóbb szerepük. Insta és facebook világ, mindenki a legszebb és legtökéletesebb oldalát szeretné megmutatni és minden másodpercben többezer emléket alkotunk magunknak és a világ számára.</p>
                </div>
            </div>
            <div className={Styles.part_wrapper}>
                <div className={Styles.image_wrapper}>
                    <div className={`${Styles.blur_border}`} style={{width: `${images.narrowLeft.childImageSharp.fluid.aspectRatio * 525}px`}}>
                        <Img fluid={images.narrowLeft.childImageSharp.fluid} className={Styles.narrow_image} alt="portrait"/>
                    </div>
                </div>
                <div id={Styles.third_paragraph}>
                    <p className={Styles.strong}>Én abban szeretnék neked segíteni, hogy ezeket az emlékeket megtöltsük élettel és tartalommal, nem elfeledve a legfontosabb dolgot: A TE személyiségedet.</p>
                    <p >Fotózásaim során a legszebb, de egybe a legvalódibb oldaladat örökítem meg, hiszen ez az, amitől Te kitűnhetsz a tömegből és az lehetsz, aki igazából vagy.</p>
                </div>
                <div className={Styles.image_wrapper}>
                    <div className={`${Styles.blur_border}`} style={{width: `${525 * images.narrowRight.childImageSharp.fluid.aspectRatio}px`}}>
                        <Img fluid={images.narrowRight.childImageSharp.fluid} alt="portrait" />
                    </div>
                </div>
            </div>
            <p>Keress bizalommal, és nem feledem a felelősséget, hogy ezek a képek pár év elteltével is ilyen fontosak lesznek Te és a családod számára</p>
        </div>
    )
}

export default Content;
