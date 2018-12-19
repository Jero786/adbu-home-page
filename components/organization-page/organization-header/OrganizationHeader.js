import './OrganizationHeader.scss';
import React from 'react';

export default class ServicesHeader extends React.PureComponent {
	render() {
		return (
  <div className="organization-header">
    <div className="organization-header__title">
					Culture &
      <br />
					Organization
    </div>
    <div className="organization-header__lear-more">
      <button type="button">Lear more</button>
    </div>
  </div>
		);
	}
}

ServicesHeader.propTypes = {};
