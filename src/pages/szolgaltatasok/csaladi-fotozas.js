import React from 'react';
import SubLayout from "../../components/subpages/subLayout";

import SlideImage1 from "../../images/navigationBox/children.jpg";
import SlideImage2 from "../../images/navigationBox/couple.jpg";
import SlideImage3 from "../../images/navigationBox/family.jpg";
import SlideImage4 from "../../images/navigationBox/mum.jpg";
import SlideImage5 from "../../images/navigationBox/portrait.jpg";
import SlideImage6 from "../../images/navigationBox/wedding.jpg";

const images = [
    SlideImage1,
    SlideImage2,
    SlideImage3,
    SlideImage4,
    SlideImage5,
    SlideImage6
]

const FamilyPage = () => {
    return (
        <>
            <SubLayout title={"Családi fotózás"} slideImages={images}>

            </SubLayout>
        </>
    )
}

export default FamilyPage;
