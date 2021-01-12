import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Album from '../../components/landing-page/album';
import Prices from '../../components/subpages/prices-wedding';


import SubLayout from "../../components/subpages/subLayout";
import Content from '../../components/subpages/wedding/content';

const Wedding = () => {
    const data = useStaticQuery(graphql`{
        first: file(relativePath: {eq: "slider/wedding/slide1.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        second: file(relativePath: {eq: "slider/wedding/slide2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        third: file(relativePath: {eq: "slider/wedding/slide3.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fourth: file(relativePath: {eq: "slider/wedding/slide4.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fifth: file(relativePath: {eq: "slider/wedding/slide5.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sixth: file(relativePath: {eq: "slider/wedding/slide6.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }`)
    
      const images = [
          data.second,
          data.fifth,
          data.fourth,
        data.first,
        data.third,
        data.sixth
      ];

    return (
        <SubLayout title={"Esküvői fotozás"} slideImages={images}>
            <Content/>
            <Prices/>
            <Album/>
        </SubLayout>
    )
}

export default Wedding;