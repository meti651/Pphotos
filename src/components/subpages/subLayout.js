import React from 'react'
import Charity from './charity';
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
                    <Charity/>
                </div>
            </Layout>
    )
}

export default SubLayout;
 