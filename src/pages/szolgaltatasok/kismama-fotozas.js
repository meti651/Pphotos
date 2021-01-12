import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Content from '../../components/subpages/mum/content';
import Image from '../../components/subpages/mum/image';
import Prices from '../../components/subpages/prices-default';

import SubLayout from "../../components/subpages/subLayout";

import Slide1 from "../../images/slider/mum/slide1.jpg";
import Slide2 from "../../images/slider/mum/slide2.jpg";
import Slide3 from "../../images/slider/mum/slide3.jpg";
import Slide4 from "../../images/slider/mum/slide4.jpg";
import Slide5 from "../../images/slider/mum/slide5.jpg";
import Slide6 from "../../images/slider/mum/slide6.jpg";

const Mum = () => {
    const data = useStaticQuery(graphql`{
        first: file(relativePath: {eq: "slider/mum/slide1.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        second: file(relativePath: {eq: "slider/mum/slide2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        third: file(relativePath: {eq: "slider/mum/slide3.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fourth: file(relativePath: {eq: "slider/mum/slide4.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fifth: file(relativePath: {eq: "slider/mum/slide5.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sixth: file(relativePath: {eq: "slider/mum/slide6.jpg"}) {
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
        <SubLayout title={"Kismama fotozás"} slideImages={images}>
            <Content/>
            <Prices Image={Image} />
        </SubLayout>
    )
}

export default Mum;