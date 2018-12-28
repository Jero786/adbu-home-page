import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import LearnMore from 'components/home-page/learn-more/LearnMore';

describe('LearnMore', () => {

	it('should exist', () => {
		expect((<LearnMore />)).to.exist;
	});

	it('should have properly classnames', function () {
		const wrapper = render(<LearnMore />);

		expect(wrapper.hasClass('learn-more')).to.be.true;
	});

	it('should contain a title', function () {
		const wrapper = render(<LearnMore />);

		expect(wrapper.find('.learn-more__title')).to.have.lengthOf(1);
	});

	it('should contain a body section', function () {
		const wrapper = render(<LearnMore />);

		expect(wrapper.find('.learn-more__body')).to.have.lengthOf(1);
	});

	it('should contain a background section', function () {
		const wrapper = render(<LearnMore />);

		expect(wrapper.find('.learn-more__bg')).to.have.lengthOf(1);
	});

});
