// Resources
import './SideBar.scss';

// Libs
import React from 'react';
import classNames from 'classnames';

// Components

export default class SideBar extends React.PureComponent {
	render() {

		const {children, isVisible} = this.props;

		return (
  <div className={classNames('adbu-sidebar', {'is-visible': isVisible})}>
    {children}
  </div>
		);
	}
}

SideBar.propTypes = {};
