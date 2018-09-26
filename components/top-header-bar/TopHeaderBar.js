import './TopHeaderBar.scss';
import React from 'react';

export default class TopHeaderBar extends React.PureComponent {
	render() {
		return (
  <div className="adbu-top-header-bar">
    <div className="adbu-top-header-bar__logo" />
    <div className="adbu-top-header-bar__burger" />
  </div>
		);
	}
}

TopHeaderBar.propTypes = {};
