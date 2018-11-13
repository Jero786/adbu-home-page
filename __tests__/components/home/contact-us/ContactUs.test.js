// Libs
import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';

// Components
import ContactUs from 'components/home/contact-us/ContactUs';

describe('ContactUs', () => {

	it('should exist', () => {
		expect((<ContactUs />)).to.exist;
	});

	it('should have the properly classnames', () => {
		const wrapper = render(<ContactUs />);

		expect(wrapper.hasClass('contact-us')).to.be.true;
	});


	it('should contain header section', function () {
		const wrapper = render(<ContactUs />);

		expect(wrapper.find('.contact-us__header')).to.have.lengthOf(1);
	});

	it('should contain body section', function () {
		const wrapper = render(<ContactUs />);

		expect(wrapper.find('.contact-us__body')).to.have.lengthOf(1);
	});

	it('should contain footer section', function () {
		const wrapper = render(<ContactUs />);

		expect(wrapper.find('.contact-us__footer')).to.have.lengthOf(1);
	});
});
