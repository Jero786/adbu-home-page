import './GridIcon.scss';
import React from 'react';
import PropTypes from 'prop-types';

function GridIcon({title, imageSrc, children}) {
	return (
  <div className="grid-icon">
    <img className="grid-icon__icon" src={imageSrc} alt="" />
    <div className="grid-icon__title">
      {title}
    </div>
    <div className="grid-icon__body">
      {children}
    </div>
  </div>
	);
}

GridIcon.propTypes = {
	title: PropTypes.string,
	imageSrc: PropTypes.string,
	children: PropTypes.any
};
GridIcon.defaultProps = {};

export default GridIcon;
