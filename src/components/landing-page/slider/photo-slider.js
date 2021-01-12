import { graphql, useStaticQuery } from 'gatsby';
import React, {useState, useEffect} from 'react';

import Wedding from "../../../images/slider/1.jpg";
import Family from "../../../images/slider/2.jpg";
import Mum from "../../../images/slider/3.jpg";
import Children from "../../../images/slider/4.jpg";
import Couple from "../../../images/slider/5.jpg";
import Portrait from "../../../images/slider/6.jpg";

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
                fluid(maxWidth: 1600) {
                  srcSet
                }
              }
            }
          
        second: 
            file(relativePath: {eq: "slider/2.jpg"}) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1600) {
                    srcSet
                  }
                }
              }
        
        third: 
            file(relativePath: {eq: "slider/3.jpg"}) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1600) {
                    srcSet
                  }
                }
              }
        
        fourth: 
            file(relativePath: {eq: "slider/4.jpg"}) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1600) {
                    srcSet
                  }
                }
              }
        
        fifth: 
            file(relativePath: {eq: "slider/5.jpg"}) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1600) {
                    srcSet
                  }
                }
              }
        
        sixth: 
            file(relativePath: {eq: "slider/6.jpg"}) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1600) {
                    srcSet
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
