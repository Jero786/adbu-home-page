import './index.scss';
import React from 'react';
import HomeHeader from 'components/home-page/home-header/HomeHeader';
import LearnMore from 'components/home-page/learn-more/LearnMore';
import Studios from 'components/home-page/studios/Studios';
import Layout from 'components/layout/layout';
import ContactUs from 'components/home-page/contact-us/ContactUs';
import Footer from 'components/footer/Footer';


export default class HomePage extends React.PureComponent {
	render() {
		return (
  <div className="home-page-container">
    <Layout>
      <HomeHeader />
      <LearnMore />
      <ContactUs />
      <Footer />
    </Layout>
  </div>
		);
	}
}

HomePage.propTypes = {};
