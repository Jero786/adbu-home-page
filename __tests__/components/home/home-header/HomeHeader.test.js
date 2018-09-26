import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import HomeHeader from 'components/home/home-header/HomeHeader';

describe('HomeHeader', () => {

	it('should exist', () => {
		expect((<HomeHeader />)).to.exist;
	});

	it('should contain properly classname', function () {
		const wrapper = render(<HomeHeader />);

		expect(wrapper.hasClass('home-header')).to.be.true;
		expect(wrapper.find('.home-header__title')).to.have.lengthOf(1);
		expect(wrapper.find('.home-header__scroll-down')).to.have.lengthOf(1);
	});

});
