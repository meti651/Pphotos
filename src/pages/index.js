import React, {useState, useRef} from "react";
import Layout from "../components/layout";
import AboutMe from "../components/landing-page/about-me";
import Slider from "../components/landing-page/slider/photo-slider";
import Opinions from "../components/landing-page/opinions";
import NavigationBoxes from "../components/landing-page/navigationBoxes";
import Img from "gatsby-image";

import "./index.scss";
import Album from "../components/landing-page/album";
import { graphql, useStaticQuery } from "gatsby";

export default function Home() {
  const [onTop, setOnTop] = useState(true);
  const scrollDisplay = useRef();
  const backgroundImages = useStaticQuery(graphql`{
    first: file(relativePath: {eq: "background/background-1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    second: file(relativePath: {eq: "background/background-2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    third: file(relativePath: {eq: "background/background-3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`)

  const handleScroll = () => {
    if(scrollDisplay.current.scrollTop === 0) setOnTop(true);
    else setOnTop(false);
    window.scrollTo(0, 0);
  }

  return (
    <>
          <main className="main" onScroll={handleScroll} ref={scrollDisplay}>
        <Layout onTop={onTop} isIndex={true}>
              <Slider/>
              <section className="section parallax" style={{height: `${60/backgroundImages.first.childImageSharp.fluid.aspectRatio}vw`}}><Img fluid={backgroundImages.first.childImageSharp.fluid} alt="background 1"/></section>
              <AboutMe/>
              <section className="section parallax" style={{height: `${60/backgroundImages.second.childImageSharp.fluid.aspectRatio}vw`}}><Img fluid={backgroundImages.second.childImageSharp.fluid} alt="background 2"/></section>
              <Opinions/>
              <section className="section parallax" style={{height: `${60/backgroundImages.third.childImageSharp.fluid.aspectRatio}vw`}}><Img fluid={backgroundImages.third.childImageSharp.fluid} alt="background 3"/></section>
              <NavigationBoxes/>
              <Album />
        </Layout>
          </main>
    </>
  )
}
