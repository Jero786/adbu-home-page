// Resources
import './LearnMore.scss';
import 'components/button/Button.scss';

// Libs
import React from 'react';

export default class LearnMore extends React.PureComponent {
	render() {
		return (
			<article className="learn-more">
				<div className="learn-more__body">
					<h1 className="learn-more__title">WE HAVE YOU COVER</h1>
					<p className="learn-more__description">
						We work collaboratively as a team of strategists, creatives and technologists to understand
						opportunities,define solutions and transform .The world is overstocked with look-alikes. More than ever, it
						is
						absolutely critical to act different, look different and be different than everyone else

					</p>
					<a href="/services" className="href">
						<button type="button" className="learn-more__button">LEARN MORE</button>
					</a>
				</div>
				<div className="learn-more__bg"/>
			</article>
		);
	}
}

LearnMore.propTypes = {};
