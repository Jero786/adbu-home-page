import './GridIcons.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class GridIcons extends React.PureComponent {
	render() {
		const {children, className} = this.props;
		return (
  <div className={`grid-icons ${className ? className : ''}`}>{children}</div>
		);
	}
}

GridIcons.propTypes = {
	children: PropTypes.any.isRequired
};
