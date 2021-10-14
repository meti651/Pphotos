import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Content from "../../components/subpages/mum/content"
import Image from "../../components/subpages/mum/image"
import Prices from "../../components/subpages/prices-default"
import SEO from "../../components/seo"
import { useLocation } from "@reach/router"

import SubLayout from "../../components/subpages/subLayout"

const Mum = () => {
  const data = useStaticQuery(graphql`
    {
      first: file(relativePath: { eq: "slider/mum/slide1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      second: file(relativePath: { eq: "slider/mum/slide2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      third: file(relativePath: { eq: "slider/mum/slide3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fourth: file(relativePath: { eq: "slider/mum/slide4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fifth: file(relativePath: { eq: "slider/mum/slide5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sixth: file(relativePath: { eq: "slider/mum/slide6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { pathName } = useLocation()

  const pageMetadata = {
    title: "Kismama fotózás",
    description:
      "Kismama, terhes fotózás. Budapesten és egész Magyarországon belül. Fotók a terhesség/kismamaság csodálatos pillanatairól.",
    path: pathName,
  }

  const images = [
    data.first,
    data.second,
    data.third,
    data.fourth,
    data.fifth,
    data.sixth,
  ]

  return (
    <SubLayout title={"Kismama fotózás"} slideImages={images}>
      <SEO pageMetadata={pageMetadata} />
      <Content />
      <Prices Image={Image} />
    </SubLayout>
  )
}

export default Mum
