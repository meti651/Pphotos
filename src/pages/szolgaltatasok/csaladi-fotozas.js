import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Content from "../../components/subpages/family/content";
import Image from "../../components/subpages/family/image";
import Prices from "../../components/subpages/prices-default";
import SubLayout from "../../components/subpages/subLayout";

const FamilyPage = () => {
  const data = useStaticQuery(graphql`{
    first: file(relativePath: {eq: "slider/family/slide1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    second: file(relativePath: {eq: "slider/family/slide2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    third: file(relativePath: {eq: "slider/family/slide3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fourth: file(relativePath: {eq: "slider/family/slide4.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fifth: file(relativePath: {eq: "slider/family/slide5.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sixth: file(relativePath: {eq: "slider/family/slide6.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`)

  const images = [
    data.first,
    data.fifth,
    data.second,
    data.third,
    data.sixth,
    data.fourth,
  ];

  return (
    <>
      <SubLayout title={"Családi fotózás"} slideImages={images}>
        <Content />
        <Prices Image={Image} />
      </SubLayout>
    </>
  );
};

export default FamilyPage;
