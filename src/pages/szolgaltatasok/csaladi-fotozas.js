import React from "react";
import Content from "../../components/subpages/family/content";
import Image from "../../components/subpages/family/image";
import Prices from "../../components/subpages/prices-default";
import SubLayout from "../../components/subpages/subLayout";

import SlideImage1 from "../../images/slider/family/slide1.jpg";
import SlideImage2 from "../../images/slider/family/slide2.jpg";
import SlideImage3 from "../../images/slider/family/slide3.jpg";
import SlideImage4 from "../../images/slider/family/slide4.jpg";
import SlideImage5 from "../../images/slider/family/slide5.jpg";
import SlideImage6 from "../../images/slider/family/slide6.jpg";

const images = [
  SlideImage1,
  SlideImage5,
  SlideImage2,
  SlideImage3,
  SlideImage6,
  SlideImage4,
];

const FamilyPage = () => {
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
