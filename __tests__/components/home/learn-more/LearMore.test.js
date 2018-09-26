import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import LearnMore from 'components/home/learn-more/LearnMore';

describe('LearnMore', () => {

	it('should exist', () => {
		expect((<LearnMore />)).to.exist;
	});

	it('should have properly classnames', function () {
		const wrapper = render(<LearnMore />);

		expect(wrapper.hasClass('learn-more')).to.be.true;
		expect(wrapper.find('.learn-more__title')).to.have.lengthOf(1);
		expect(wrapper.find('.learn-more__body')).to.have.lengthOf(1);
		expect(wrapper.find('.learn-more__button')).to.have.lengthOf(1);
	});

});
