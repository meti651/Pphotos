import { useStaticQuery, graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';

import Styles from "./gallery.module.scss";
import Images from './images';

const Gallery = () => {
    const [imagesShown, setImagesShown] = useState();
    const images = useStaticQuery(graphql`
    query {
        all: allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {regex: "/gallery/"}}){
            edges{
              node{
                relativePath
                childImageSharp{
                  fluid(maxWidth: 1600){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
    }`)

    useEffect(() => {setImagesShown(() => images.all.edges)}, [images])

    const filterChangeHandler = ({target}) => {
        setImagesShown(() => {
            return images.all.edges.filter(image => image.node.relativePath.includes(target.value) && image);
        })
    }

    return (
        <div id={Styles.container}>
            <h1>Galéria</h1>
            <div id={Styles.filter}>
                <span>Szűrő: </span>
                <select onChange={filterChangeHandler}>
                    <option value="" aria-selected>All</option>
                    <option value="family">Család</option>
                    <option value="wedding">Esküvő</option>
                    <option value="child">Gyerek, baba</option>
                    <option value="mum">Kismama</option>
                    <option value="couple">Páros</option>
                    <option value="porrtrait">Portré</option>
                </select>
            </div>
            <Images images={imagesShown}/>
        </div>
    )
}

export default Gallery;