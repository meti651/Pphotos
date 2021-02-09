import React from 'react';

import Gallery from "../components/gallery/gallery";
import Layout from '../components/layout';
import SEO from '../components/seo';

const GalleryPage = () => {
    return(
        <>
            <Layout onTop={false}>
                <SEO />
                <Gallery/>
            </Layout>  
        </>
    )
}

export default GalleryPage;