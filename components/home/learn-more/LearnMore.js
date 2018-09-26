import './LearnMore.scss';
import React from 'react';

export default class LearnMore extends React.PureComponent {
	render() {
		return (
  <article className="learn-more">
    <h1 className="learn-more__title">WE HAVE YOU COVER</h1>
    <p className="learn-more__body">
					We work collaboratively as a team of strategists, creatives and technologists to understand
					opportunities,define solutions and transform .The world is overstocked with look-alikes. More than ever, it is
					absolutely critical to act different, look different and be different than everyone else
    </p>
    <i className="learn-more__button">LEARN MORE</i>

  </article>
		);
	}
}

LearnMore.propTypes = {};
