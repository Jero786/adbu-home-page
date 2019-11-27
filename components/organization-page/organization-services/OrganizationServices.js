import './OrganizationServices.scss';

import React from 'react';
import GridIcons from 'components/grid-icons/GridIcons';
import GridIcon from 'components/grid-icons/GridIcon';

export default class OrganizationServices extends React.PureComponent {
	render() {
		return (
  <article className="organization-studios">
    <div className="organization-studios__list">
      <GridIcons>
        <GridIcon title="ADBU INCUBATOR" imageSrc="/static/images/icon-lamp.svg">
							Talent incubator is a key aspect for adbu. For that reason we are focus in discover talent were other companies never image it. A disruptive way to work with new generation of developers also is within adbu Incubator and Labs.Besides of that new state of the art products are launched internally in adbu to evolve, improve and polish. Once they are mature we include them as part in new solutions to our clients.

        </GridIcon>
        <GridIcon title="ADBU LABS" imageSrc="/static/images/icon-bottle.svg">
							Adbu Labs is used in adbu to learn, discover and improve new solutions. Robotics, 3D printing, Augmented reality, new clouds apps and more and being creating in Adbu Labs

        </GridIcon>
      </GridIcons>
    </div>
  </article>
		);
	}
}

OrganizationServices.propTypes = {};
