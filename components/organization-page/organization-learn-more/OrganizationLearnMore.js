// Resources
import './OrganizationLearnMore.scss';
import 'components/button/Button.scss';

// Libs
import React from 'react';

export default class OrganizationLearnMore extends React.PureComponent {
	render() {
		return (
  <article className="organization-learn-more">
    <div className="organization-learn-more__body">
      <h1 className="organization-learn-more__title">WE HAVE YOU COVER</h1>
      <p className="organization-learn-more__description">
				Entrepreneurial spirit is a mindset. It’s an attitude and approach to thinking that actively seeks out change, rather than waiting to adapt to change. It’s a mindset that embraces critical questioning, innovation, service and continuous improvement. “It’s about seeing the big picture and thinking like an owner.“It’s being agile, never resting on your laurels, shaking off the cloak of complacency and seeking out new opportunities. It’s about taking ownership and pride in your organization.” ( Forbes )
      </p>
      <button type="button" className="organization-learn-more__button">LEARN MORE</button>
    </div>
    <div className="organization-learn-more__bg" />
  </article>
		);
	}
}

OrganizationLearnMore.propTypes = {};
