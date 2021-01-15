import React from 'react';
import Footer from './footer';

import Header from "./header";
import Styles from "./layout.module.scss";

const Layout = ({children, onTop}) => {
    return (
        <div id={Styles.container}>
            <Header onTop={onTop}/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout;
