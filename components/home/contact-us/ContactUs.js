// Resources
import './ContactUs.scss';
import 'components/button/Button.scss';

// Libs
import React from 'react';

export default class ContactUs extends React.PureComponent {
	render() {

		return (
  <div className="contact-us">
    <div className="contact-us__header">
      <div className="contact-us__header-title">
						LET´S WORK TOGETHER

      </div>
      <div className="contact-us__header-description">
						In Adbu we hold a passion for innovation, brilliant ideas and the execution that brings them all together in
						one beautiful experience
      </div>
    </div>
    <div className="contact-us__body">
      <div className="contact-us__body-half-side">
        <div className="contact-us__body-title">NEW BUSINESS</div>
        <div className="contact-us__body-submit">
          <button type="button">SEND A MESSAGE</button>
        </div>
      </div>

      <div className="contact-us__body-half-side">
        <div className="contact-us__body-title">
							JOIN TO TEAM

        </div>
        <div className="contact-us__body-submit">
          <button type="button">SEND A MESSAGE</button>
        </div>
      </div>
    </div>
    <div className="contact-us__footer">
      <div className="contact-us__footer-header" />
      <div className="contact-us__footer-body">
        <div className="contact-us__footer-body-logo" />
        <div className="contact-us__footer-body-description" />
        <div className="contact-us__footer-body-signature" />
      </div>
    </div>
  </div>
		);
	}
}

ContactUs.propTypes = {};
