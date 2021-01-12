import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Content from '../../components/subpages/child/content';
import Image from '../../components/subpages/child/image';
import Prices from "../../components/subpages/prices-default";

import SubLayout from "../../components/subpages/subLayout";

import Slide1 from "../../images/slider/child/slide1.jpg";
import Slide2 from "../../images/slider/child/slide2.jpg";
import Slide3 from "../../images/slider/child/slide3.jpg";
import Slide4 from "../../images/slider/child/slide4.jpg";
import Slide5 from "../../images/slider/child/slide5.jpg";
import Slide6 from "../../images/slider/child/slide6.jpg";

const Child = () => {
    const data = useStaticQuery(graphql`{
        first: file(relativePath: {eq: "slider/child/slide1.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        second: file(relativePath: {eq: "slider/child/slide2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        third: file(relativePath: {eq: "slider/child/slide3.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fourth: file(relativePath: {eq: "slider/child/slide4.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fifth: file(relativePath: {eq: "slider/child/slide5.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sixth: file(relativePath: {eq: "slider/child/slide6.jpg"}) {
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
        <SubLayout title={"Gyerek, baba fotozás"} slideImages={images}>
            <Content />
            <Prices Image={Image}/>
        </SubLayout>
    )
}

export default Child;