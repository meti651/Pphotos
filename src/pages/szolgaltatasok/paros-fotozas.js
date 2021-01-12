import React from 'react';
import Image from '../../components/subpages/couple/image';
import Prices from '../../components/subpages/prices-default';
import Content from "../../components/subpages/couple/content";

import SubLayout from "../../components/subpages/subLayout";

import Slide1 from "../../images/slider/couple/slide1.jpg";
import Slide2 from "../../images/slider/couple/slide2.jpg";
import Slide3 from "../../images/slider/couple/slide3.jpg";
import Slide4 from "../../images/slider/couple/slide4.jpg";
import Slide5 from "../../images/slider/couple/slide5.jpg";
import Slide6 from "../../images/slider/couple/slide6.jpg";
import { graphql, useStaticQuery } from 'gatsby';

const Couple = () => {
    const data = useStaticQuery(graphql`{
        first: file(relativePath: {eq: "slider/couple/slide1.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        second: file(relativePath: {eq: "slider/couple/slide2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        third: file(relativePath: {eq: "slider/couple/slide3.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fourth: file(relativePath: {eq: "slider/couple/slide4.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fifth: file(relativePath: {eq: "slider/couple/slide5.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sixth: file(relativePath: {eq: "slider/couple/slide6.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }`)
    
      const images = [
        data.first,
        data.second,
        data.third,
        data.fourth,
        data.fifth,
        data.sixth
      ];
    return (
        <SubLayout title={"Páros fotozás"} slideImages={images}>
            <Content/>
            <Prices Image={Image} />
        </SubLayout>
    )
}

export default Couple;