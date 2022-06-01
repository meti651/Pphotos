import React, { useEffect, useState } from "react"

import * as Styles from "./content.module.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Content = () => {
  const image = useStaticQuery(graphql`
    {
      first: file(relativePath: { eq: "content/couple/1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [imageWidthProportion, setImageWidthProportion] = useState()

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth > 1024)
        setImageWidthProportion(window.innerWidth / 1920)
      else if (window.innerWidth <= 1024 && window.innerWidth > 768)
        setImageWidthProportion(window.innerWidth / 1500)
      else if (window.innerWidth <= 768 && window.innerWidth > 480)
        setImageWidthProportion(window.innerWidth / 1024)
      else if (window.innerWidth <= 480)
        setImageWidthProportion(window.innerWidth / 768)
    }

    window.addEventListener("resize", resizeHandler)
    resizeHandler()
    return () => window.removeEventListener("resize", resizeHandler)
  }, [])

  return (
    <div id={Styles.container}>
      <div className={Styles.strong}>
        A 2020’as években valószínűleg a legtöbb párnak selfiek vagy egymásról
        készített képek alkotják a galériáját, és ez teljesen rendben is van, a
        fotósoknál sincs ez másképp {":)"}
      </div>
      <div id={Styles.content}>
        <div className={Styles.paragraph}>
          <p>
            Viszont eljön mindenkinek az a pont amikor úgy érzik komolyabbra
            fordul a kapcsolat, megtörténik az eljegyzés, hogy szeretnének profi
            képeket látni maguktól. Egy új vászonkép a közös otthonban vagy egy
            lapozgatható fotóalbum azért igazán más érzéseket kelt az emberben.
          </p>
          <p>
            Célom hogy a szerelmetek maradandó legyen és az évek múltával
            boldogan nézegessétek vissza a képeket. Hogy ilyenek is voltunk mi!
          </p>
        </div>
        <div className={Styles.image_container}>
          <div
            className={Styles.blur_border}
            style={{
              width: `${
                image.first.childImageSharp.fluid.aspectRatio *
                450 *
                imageWidthProportion
              }px`,
            }}
          >
            <Img fluid={image.first.childImageSharp.fluid} alt="couple" />
          </div>
        </div>
        <div className={Styles.paragraph}>
          <p>
            Szeretném hogy a fotózást egy különleges randiként élnétek meg. Ahol
            mindketten felveszitek a kedvenc ruháitokat, és egymásra hangolódva
            kikapcsoltok pár órára.
          </p>
          <p>
            Utána egy közös vacsi, vagy séta a helyszínen még maradandóbbá
            teheti a napot. Mindemellett pedig a párotok egy új oldalát is
            megismerhetitek. A fotózások során a természetességre törekszem és
            hogy igazán jól érezzétek magatokat, erőltetett pózok nélkül.
          </p>
        </div>
      </div>
      <div className={Styles.strong}>
        Várlak benneteket sok szeretettel! Időpontot egyeztetni emailben tudtok.
        {":)"}
      </div>
    </div>
  )
}

export default Content
