import React from 'react';
import Helmet from "react-helmet";
import { useStaticQuery } from 'gatsby';

const SEO = ({pageMetadata}) => {
    const metadata = useStaticQuery(graphql`
    {
        site{
            siteMetadata{
                title
                description
                baseUrl
            }
        }
    }
    `);

    const defaults = metadata.site.siteMetadata;

    const seo = {
        title: pageMetadata?.title || defaults.title,
        description: pageMetadata?.description || defaults.description,
        urlrl: new URL(pageMetadata?.path || "", defaults.baseUrl)
    }

    return (
        <Helmet>
            <title>{seo.title}</title>
            <link rel="canonical" href={seo.url}/>
            <meta name="description" content={seo.description} />

            <meta property="og:title" content={seo.title} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:type" content="website" />
        </Helmet>
    )

}

export default SEO;
