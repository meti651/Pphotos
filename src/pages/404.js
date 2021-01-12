import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const pageNotFound = () => {
    return(
        <Layout>
            <div>
                <h1>Page not found</h1>
                <p>Oops! The page you are looking for is not exist anymore</p>
                <Link to="/">Go to Home</Link>
            </div>
        </Layout>
    )
}

export default pageNotFound;