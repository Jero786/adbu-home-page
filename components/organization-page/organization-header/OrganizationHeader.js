// Resources
import './OrganizationHeader.scss';

// Libs
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
      <a href="/services" className="href">
        <button type="button">Lear more</button>
      </a>
    </div>
  </div>
		);
	}
}

ServicesHeader.propTypes = {};
