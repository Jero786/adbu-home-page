import './ServicePage.scss';

import React from 'react';
import ServicesHeader from 'components/services-page/services-header/ServicesHeader';
import ServicesStudios from 'components/services-page/services-studios/ServicesStudios';
import Layout from 'components/layout/layout';
import ContactUs from 'components/home-page/contact-us/ContactUs';
import Footer from 'components/footer/Footer';


export default class HomePage extends React.PureComponent {
	render() {
		return (
  <div className="service-page-container">
    <Layout>
      <ServicesHeader />
      <ServicesStudios />
      <ContactUs />
      <Footer />
    </Layout>
  </div>
		);
	}
}

HomePage.propTypes = {};
