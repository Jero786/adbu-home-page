import './HomeHeader.scss';
import React from 'react';

export default class HomeHeader extends React.PureComponent {
	render() {
		return (
  <div className="home-header">
    <div className="home-header__title">
					INNOVATION AND CREATIVE
      <br />
					DESIGN FOR YOUR APPS
				
    </div>
    <div className="home-header__scroll-down" />
  </div>
		);
	}
}

HomeHeader.propTypes = {};
