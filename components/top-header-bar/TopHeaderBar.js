// Resources
import './TopHeaderBar.scss';

// Libs
import React from 'react';
import Link from 'next/link';

// Components
import SideBar from 'components/side-bar/SideBar';
import SideBarItem from 'components/side-bar/SideBarItem';
import Hamburger from 'components/hamburger/Hamburger';

export default class TopHeaderBar extends React.PureComponent {

	constructor(props) {
		super(props);

		this.onToggleSideBar = this.onToggleSideBar.bind(this);

		this.state = {
			isSidebarVisible: false
		}
	}

	onToggleSideBar() {
		this.setState(prevState => {
			return {
				isSidebarVisible: !prevState.isSidebarVisible
			}
		});
	}

	render() {

		const {isSidebarVisible} = this.state;

		return (
  <div className="adbu-top-header-bar">
		<Link href="/">
    	<div className="adbu-top-header-bar__logo" />
		</Link>
    <Hamburger className="hidden-lg hidden-sm" onClick={this.onToggleSideBar} isActive={isSidebarVisible} />
    <SideBar isVisible={isSidebarVisible}>
      <SideBarItem link="/" displayName="Home" />
      <SideBarItem link="/services" displayName="Services" />
      <SideBarItem link="/organization" displayName="Culture & Organization" />
    </SideBar>
  </div>
		);
	}
}

TopHeaderBar.propTypes = {};
