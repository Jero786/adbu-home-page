// Libs
import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';

// Components
import Footer from 'components/footer/Footer';

describe('Footer', () => {

	it('should exist', () => {
		expect((<Footer />)).to.exist;
	});

	it('should have the properly classnames', () => {
		const wrapper = render(<Footer />);

		expect(wrapper.hasClass('adbu-footer')).to.be.true;
	});

});
