// Resources
import './OrganizationManifest.scss';
import 'components/button/Button.scss';

// Libs
import React from 'react';

export default class OrganizationManifest extends React.PureComponent {
	render() {
		return (
  <article className="organization-manifest">
    <div className="organization-manifest__body">
      <h1 className="organization-manifest__title">ADBU Manifest</h1>
      <div className="organization-manifest__description">
        <ul>
          <li>BE THE BEST OF YOU</li>
          <li>THINK LESS DO MORE</li>
          <li>NEVER GAVE OR TOOK ANY EXCUSE</li>
          <li>MAKE TODAY AMAZING</li>
          <li>MAGINATION IS THE ONLY THING</li>
        </ul>
        <ul>
          <li>BE STRONGER THAN YOUR EXCUSES</li>
          <li>ALWAYS DELIVER MORE THAN EXPECTED</li>
          <li>DREAM IT,  WISH IT, DO IT</li>
          <li>FOCUS ON THE GOOD</li>
        </ul>
      </div>
    </div>
  </article>
		);
	}
}

OrganizationManifest.propTypes = {};
