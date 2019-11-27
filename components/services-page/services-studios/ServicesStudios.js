import './ServicesStudios.scss';

import React from 'react';
import GridIcons from 'components/grid-icons/GridIcons';
import GridIcon from 'components/grid-icons/GridIcon';

export default class ServicesStudios extends React.PureComponent {
	render() {
		return (
  <article className="services-studios">
    <div className="services-studios__list">
      <GridIcons>
        <GridIcon title="DEV STUDIO" imageSrc="/static/images/dev-setting.svg">
							In adbu we use system development methodology suitable for your projects needs. Our main development methodology is Agile, due to it promotes adaptive planning, evolutionary development, early delivery, continuous improvement, and encourages rapid and flexible response to change.

        </GridIcon>
        <GridIcon title="QA STUDIO" imageSrc="/static/images/studios-qa.png">
							In adbu we apply quality assurance process to see whether a product or service being developed is meeting specified requirements.To achieve the best deliveries in adbu we perform the high Quality control (QC) defining a set of procedures intended to ensure that a product or performed service meets the requirements of the client.MANUAL TESTINGIn adbu we have several testers that takes over the role of an end-user and tests the software to identify any unexpected behavior or bugAUTOMATITION TESTINGOur automation engineers writes scripts and uses most popular software to test the product such as Selenium, JMeter, etc

        </GridIcon>
        <GridIcon title="IOT STUDIO" imageSrc="/static/images/hand-clock.svg">
							The Internet of Things (IoT) is the network of physical objects—devices, vehicles, buildings and other items, which are embedded with electronics, software, sensors, and network connectivity, which enables these objects to collect and exchange data.
          <br />
More objects are becoming embedded with sensors and gaining the ability to communicate. The resulting information networks promise to create new business models, improve business processes, and reduce costs and risks.
        </GridIcon>
        <GridIcon title="MOBILE STUDIO" imageSrc="/static/images/studio-mobile.png">
							The Internet of Things (IoT) is the network of physical objects—devices, vehicles, buildings and other items, which are embedded with electronics, software, sensors, and network connectivity, which enables these objects to collect and exchange data.
          <br />
More objects are becoming embedded with sensors and gaining the ability to communicate. The resulting information networks promise to create new business models, improve business processes, and reduce costs and risks.
        </GridIcon>
        <GridIcon title="TECHNOLOGY" imageSrc="/static/images/lamp.svg" className="services-studios__list-item-technology" >
							In adbu we count with engineers with experience
          <br />
							in the most popular and also state of the art
							languages, frameworks such as:
          <img height="250" src="/static/images/technology.svg" alt="Is a set of frameworks and programming language" />
        </GridIcon>
        <GridIcon title="BIG DATA STUDIO" imageSrc="/static/images/studios-big-data.png">
							Big data is arriving from multiple sources at an alarming velocity, volume and variety. To extract meaningful value from big data, you need optimal processing power, analytics capabilities and skills. … Insights from big data can enable all employees to make better decisions …”Big data is a term for data sets that are so large or complex that traditional data processing applications are inadequate.Challenges include analysis, capture, data curation, search, sharing, storage, transfer, visualization, querying and information privacy.Challenges include analysis, capture, data curation, search, sharing, storage, transfer, visualization, querying and information privacy.Big Data is used most extensively today with business intelligence and analytics applications and a number of BI vendors have moved to launch new tools…Big Data. The next frontier for innovation, compettion, and productivity.“But it’s not the amount of data that’s important. It’s what organizations do with the data that matters.
        </GridIcon>
      </GridIcons>
    </div>
  </article>
		);
	}
}

ServicesStudios.propTypes = {};
