// Resources
import './Footer.scss';

// Libs
import React from 'react';

export default class Footer extends React.PureComponent {
	render() {

		return (
  <footer className="adbu-footer">
    <div className="adbu-footer__logo" />
    <div className="adbu-footer__description">Technology and innovation for your apps</div>
    <div className="adbu-footer__copyright">© 2017 ADBU. All right reserved</div>
  </footer>

		);
	}
}

Footer.propTypes = {};
