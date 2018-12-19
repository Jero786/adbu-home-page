import './OrganizationPage.scss';

import React from 'react';
import OrganizationHeader from 'components/organization-page/organization-header/OrganizationHeader';
import OrganizationServices from 'components/organization-page/organization-services/OrganizationServices';
import Layout from 'components/layout/layout';
import ContactUs from 'components/home-page/contact-us/ContactUs';
import Footer from 'components/footer/Footer';
import OrganizationLearnMore from 'components/organization-page/organization-learn-more/OrganizationLearnMore';


export default class HomePage extends React.PureComponent {
	render() {
		return (
  <div className="organization-page-container">
    <Layout>
      <OrganizationHeader />
      <OrganizationLearnMore />
      <OrganizationServices />
      <ContactUs />
      <Footer />
    </Layout>
  </div>
		);
	}
}

HomePage.propTypes = {};
