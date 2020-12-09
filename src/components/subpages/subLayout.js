import React from 'react'
import Layout from "../layout";
import Slider from "./slider";

import Styles from "./subLayout.module.scss";

const SubLayout = ({children, title, slideImages}) => {
    return (
        <div id={Styles.container}>
            <Layout onTop={false}>
                <h1>{title}</h1>
                <Slider images={slideImages}/>

            </Layout>
        </div>
    )
}

export default SubLayout;
 