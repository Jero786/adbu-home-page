import './ServicesHeader.scss';
import React from 'react';

export default class ServicesHeader extends React.PureComponent {
	render() {
		return (
  <div className="home-header-services">
    <div className="home-header-services__title">
					Our Services

    </div>
    <div className="home-header-services__subtitle">
					Make your bussines grow
    </div>
  </div>
		);
	}
}

ServicesHeader.propTypes = {};
