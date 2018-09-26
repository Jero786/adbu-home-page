import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import HomePage from 'pages';

describe('HomePage', () => {

	it('should exist', () => {
		expect((<HomePage />)).to.exist;
	});

	it('should has properly classname', function () {
		const wrapper = render(<HomePage />);

		expect(wrapper.hasClass('home-page-container')).to.be.true;
	});

	it('should container header section', function () {
		const wrapper = render(<HomePage />);

		expect(wrapper.find('.home-header')).to.have.lengthOf(1);
	});

	it('should container learn more section', function () {
		const wrapper = render(<HomePage />);

		expect(wrapper.find('.learn-more')).to.have.lengthOf(1);
	});

	it('should container studios section', function () {
		const wrapper = render(<HomePage />);

		expect(wrapper.find('.studios')).to.have.lengthOf(1);
	});
});
