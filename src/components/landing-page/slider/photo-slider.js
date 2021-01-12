import { graphql, useStaticQuery } from 'gatsby';
import React, {useState, useEffect} from 'react';

import Styles from "./photo-slider.module.scss";
import Slide from './slide';



const Slider = () => {
    
    const [slide, setSlide] = useState(0);
    // const [slidesElements, setSlidesElements] = useState();
    const images = useStaticQuery(graphql`
    {
        first: 
            file(relativePath: {eq: "slider/1.jpg"}) {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1600, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          
        second: 
            file(relativePath: {eq: "slider/2.jpg"}) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1600, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        
        third: 
            file(relativePath: {eq: "slider/3.jpg"}) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1600, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        
        fourth: 
            file(relativePath: {eq: "slider/4.jpg"}) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1600,quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        
        fifth: 
            file(relativePath: {eq: "slider/5.jpg"}) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1600, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        
        sixth: 
            file(relativePath: {eq: "slider/6.jpg"}) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1600, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        
    }
      `);
        console.log(images);
      const slidesElements = [
        {"image": images.first, "caption": "esküvői"}, 
        {"image": images.second, "caption": "családi"}, 
        {"image": images.third, "caption": "kismama"},
        {"image": images.fourth, "caption": "gyerek"},
        {"image": images.fifth, "caption": "páros"},
        {"image": images.sixth, "caption": "portré"}];

    useEffect(() => {
        let slideNum = slide;
        slideNum += 1;
        if(slideNum > 5) setTimeout(() => setSlide(0), 6500);
        else setTimeout(() => setSlide(slideNum), 6500);
    }, [slide])

    return(
        <>
        <div id={Styles.container}>
            {slidesElements.map((image, index) => <Slide key={index} image={image} slide={slide}/>)}
        </div>
        <p id={Styles.quote}>Élmény alapú fotózás</p>
        </>
    )
}

export default Slider;
