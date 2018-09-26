import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import GridIcons from 'components/grid-icons/GridIcons';
import GridIcon from 'components/grid-icons/GridIcon';

describe('GridIcons', () => {

	it('should exist', () => {
		expect((
  <GridIcons>
    <GridIcon />
  </GridIcons>
		)).to.exist;
	});

	it('should have the properly classnames', () => {
		const wrapper = render(
  <GridIcons>
    <GridIcon />
  </GridIcons>
		);

		expect(wrapper.hasClass('grid-icons')).to.be.true;
		expect(wrapper.find('.grid-icon__icon')).to.have.lengthOf(1);
		expect(wrapper.find('.grid-icon__title')).to.have.lengthOf(1);
		expect(wrapper.find('.grid-icon__body')).to.have.lengthOf(1);
	});

	it('should contain the properly title each grid icon', () => {
		const wrapper = render(
  <GridIcons>
    <GridIcon title="Mobile Studio" />
    <GridIcon title="Big Data Studio" />
  </GridIcons>
		);

		expect(wrapper.find('.grid-icon__title').eq(0).text()).to.equals('Mobile Studio');
		expect(wrapper.find('.grid-icon__title').eq(1).text()).to.equals('Big Data Studio');
	});

	it('should contain the properly body each grid icon', () => {
		const wrapper = render(
  <GridIcons>
    <GridIcon><img src="some_image" alt="" /></GridIcon>
  </GridIcons>
		);

		expect(wrapper.find('.grid-icon img').get(0).tagName).to.equal('img');
	});


});
