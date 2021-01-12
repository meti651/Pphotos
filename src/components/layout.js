import React from 'react';
import Footer from './footer';
import Styles from "./layout.module.scss";

import Header from "./header";

const Layout = ({children, onTop}) => {
    return (
        <div id={Styles.main}>
            <Header onTop={onTop}/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout;
