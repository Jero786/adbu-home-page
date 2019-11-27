import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import HomeHeader from 'components/home-page/home-header/HomeHeader';

describe('HomeHeader', () => {

	it('should exist', () => {
		expect((<HomeHeader />)).to.exist;
	});

	it('should contain properly classname', function () {
		const wrapper = render(<HomeHeader />);

		expect(wrapper.hasClass('home-header')).to.be.true;
	});

	it('should contain title', function () {
		const wrapper = render(<HomeHeader />);

		expect(wrapper.find('.home-header__title')).to.have.lengthOf(1);
	});

	it('should contain a subtitle', function () {
		const wrapper = render(<HomeHeader />);

		expect(wrapper.find('.home-header__subtitle')).to.have.lengthOf(1);
	});

});
