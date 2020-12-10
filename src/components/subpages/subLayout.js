import React from 'react'
import Layout from "../layout";
import Slider from "./slider";

import Styles from "./subLayout.module.scss";

const SubLayout = ({children, title, slideImages}) => {
    return (
            <Layout onTop={false}>
                <div id={Styles.container}>
                    <h1>{title}</h1>
                    <Slider images={slideImages}/>
                    {children}
                </div>
            </Layout>
    )
}

export default SubLayout;
 