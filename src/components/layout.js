import React from 'react';
import Footer from './footer';

import Header from "./header";

const Layout = ({children, onTop, setOnTop}) => {
    return (
        <>
            <Header onTop={onTop}/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;
