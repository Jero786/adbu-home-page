import './HomeHeader.scss';
import React from 'react';

export default class HomeHeader extends React.PureComponent {
	render() {
		return (
  <div className="home-header">
    <div className="home-header__title">
					INNOVATION AND CREATIVE
    </div>
    <div className="home-header__subtitle">
					DESIGN FOR YOUR APPS
    </div>
  </div>
		);
	}
}

HomeHeader.propTypes = {};
