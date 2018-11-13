import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import Studios from 'components/home/studios/Studios';

describe('Studios', () => {

	it('should exist', () => {
		expect((<Studios />)).to.exist;
	});

	it('should have a properly classnames', function () {
		const wrapper = render(<Studios />);

		expect(wrapper.hasClass('studios')).to.be.true;
		expect(wrapper.find('.studios__title')).to.have.lengthOf(1);
		expect(wrapper.find('.studios__description')).to.have.lengthOf(1);
		expect(wrapper.find('.studios__list')).to.have.lengthOf(1);
	});

	it('should contain properly grid icons', function () {
		const wrapper = render(<Studios />);

		expect(wrapper.find('.grid-icons')).to.have.lengthOf(1);
		expect(wrapper.find('.grid-icon__title').eq(0).text()).to.equal('MOBILE STUDIO');
		expect(wrapper.find('.grid-icon__title').eq(1).text()).to.equal('BIG DATA STUDIO');
		expect(wrapper.find('.grid-icon__title').eq(2).text()).to.equal('QA STUDIO');
		expect(wrapper.find('.grid-icon__title').eq(3).text()).to.equal('CREATIVE STUDIO');
	});

	it('should have a footer section', function () {
		const wrapper = render(<Studios />);

		expect(wrapper.find('.studios__footer')).to.have.lengthOf(1);
	});

});
