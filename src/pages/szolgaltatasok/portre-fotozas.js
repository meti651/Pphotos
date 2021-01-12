import React from 'react'

import SubLayout from "../../components/subpages/subLayout";
import Content from "../../components/subpages/portrait/content";
import Prices from '../../components/subpages/prices-default';
import Image from "../../components/subpages/portrait/image";

import Slide1 from "../../images/slider/portrait/slide1.jpg";
import Slide2 from "../../images/slider/portrait/slide2.jpg";
import Slide3 from "../../images/slider/portrait/slide3.jpg";
import Slide4 from "../../images/slider/portrait/slide4.jpg";
import Slide5 from "../../images/slider/portrait/slide5.jpg";
import Slide6 from "../../images/slider/portrait/slide6.jpg";
import { graphql, useStaticQuery } from 'gatsby';

const Portrait = () => {
    const data = useStaticQuery(graphql`{
        first: file(relativePath: {eq: "slider/portrait/slide1.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        second: file(relativePath: {eq: "slider/portrait/slide2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        third: file(relativePath: {eq: "slider/portrait/slide3.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fourth: file(relativePath: {eq: "slider/portrait/slide4.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fifth: file(relativePath: {eq: "slider/portrait/slide5.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sixth: file(relativePath: {eq: "slider/portrait/slide6.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }`)
    
      const images = [
          data.second,
        data.first,
        data.third,
        data.fifth,
        data.sixth,
        data.fourth,
      ];

    return (
        <SubLayout title="Portré Fotózás" slideImages={images}>
            <Content/>
            <Prices Image={Image}/>
        </SubLayout>
    )
}

export default Portrait;
