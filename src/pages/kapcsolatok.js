import React from 'react';
import Layout from '../components/layout';
import Contacts from "../components/contacts";
import SEO from "../components/seo";

const ContactsPage = () => {
    return (
        <Layout>
            <SEO />
            <Contacts/>
        </Layout>
    )
}

export default ContactsPage;