import './index.scss';
import React from 'react';
import HomeHeader from 'components/home/home-header/HomeHeader';
import LearnMore from 'components/home/learn-more/LearnMore';
import Studios from 'components/home/studios/Studios';
import Layout from 'components/layout/layout';

export default class HomePage extends React.PureComponent {
	render() {
		return (
  <div className="home-page-container">
    <Layout>
      <HomeHeader />
      <LearnMore />
      <Studios />
    </Layout>
  </div>
		);
	}
}

HomePage.propTypes = {};
