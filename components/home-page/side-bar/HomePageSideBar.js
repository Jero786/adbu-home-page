// Resources
import './HomePageSideBar.scss';

// Libs
import React from 'react';

// Components
import SideBar from 'components/side-bar/SideBar';
import SideBarItem from 'components/side-bar/SideBarItem';

export default class HomePageSideBar extends React.PureComponent {
	render() {

		return (
  <div className="adbu-home-page-side-bar">
    <SideBar>
      <SideBarItem link="/" displayName="Home" />
      <SideBarItem link="/services" displayName="Services" />
      <SideBarItem link="/organization" displayName="Culture & Organization" />
    </SideBar>
  </div>
		);
	}
}

HomePageSideBar.propTypes = {};
