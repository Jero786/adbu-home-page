import './Studios.scss';
import React from 'react';
import GridIcons from 'components/grid-icons/GridIcons';
import GridIcon from 'components/grid-icons/GridIcon';

export default class Studios extends React.PureComponent {
	render() {
		return (
  <article className="studios">
    <h1 className="studios__title">ADBU ESTUDIO</h1>
    <p className="studios__description">
Adbu is divided into studios to organize and group in a better shape our
					delivery
    </p>
    <div className="studios__list">
      <GridIcons>
        <GridIcon title="MOBILE STUDIO" imageSrc="/static/images/studio-mobile.png" />
        <GridIcon title="BIG DATA STUDIO" imageSrc="/static/images/studios-big-data.png" />
        <GridIcon title="QA STUDIO" imageSrc="/static/images/studios-qa.png" />
        <GridIcon title="CREATIVE STUDIO" imageSrc="/static/images/studio-creative.png" />
      </GridIcons>
    </div>
  </article>
		);
	}
}

Studios.propTypes = {};
