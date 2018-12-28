// Resources
import './Hamburger.scss';

// Libs
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Hamburger extends React.PureComponent {
	render() {

		const {isActive, onClick, className = ''} = this.props;

		return (
  <button type="button" onClick={onClick} className={classNames('wit-hamburger', className, {'wit-hamburger--spin is-active': isActive})}>
    <span className="wit-hamburger-box">
      <span className="wit-hamburger-inner" />
    </span>
  </button>
		);
	}
}

Hamburger.propTypes = {
	isActive: PropTypes.bool,
	onClick: PropTypes.func,
};
