import React from 'react';

import Gallery from "../components/gallery/gallery";
import Layout from '../components/layout';

const GalleryPage = () => {
    return(
        <>
            <Layout onTop={false}>
                <Gallery/>
            </Layout>  
        </>
    )
}

export default GalleryPage;