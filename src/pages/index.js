import React, {useState, useRef} from "react";
import Layout from "../components/layout";
import AboutMe from "../components/landing-page/about-me";
import Slider from "../components/landing-page/slider/photo-slider";
import Opinions from "../components/landing-page/opinions";
import NavigationBoxes from "../components/landing-page/navigationBoxes";
import Charity from "../components/landing-page/charity";

import "./index.scss";

export default function Home() {
  const [onTop, setOnTop] = useState(true);
  const scrollDisplay = useRef();

  const handleScroll = () => {
    if(scrollDisplay.current.scrollTop === 0) setOnTop(true);
    else setOnTop(false);
  }

  return (
    <>
        <Layout onTop={onTop}>
          <main className="main" onScroll={handleScroll} ref={scrollDisplay}>
              <Slider/>
              <section className="section parallax parallax-one"></section>
              <AboutMe/>
              <section className="section parallax parallax-two"></section>
              <Opinions/>
              <section className="section parallax parallax-three"></section>
              <NavigationBoxes/>
              <Charity/>
          </main>
        </Layout>
    </>
  )
}
