import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import AboutMe from "../components/about-me";
import Slider from "../components/slider/photo-slider";
import Quotes from "../components/slider/quotes";
import Opinions from "../components/opinions";

export default function Home() {
  return (
    <>
      <Header/>
      <Slider/>
      <Quotes/>
      <AboutMe/>
      <Opinions/>
      <Footer/>
    </>
  )
}
