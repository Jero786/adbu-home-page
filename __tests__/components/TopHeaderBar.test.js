import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import TopHeaderBar from 'components/top-header-bar/TopHeaderBar';

describe('TopHeaderBar', () => {

	it('should exist', () => {
		expect((<TopHeaderBar />)).to.exist;
	});

	it('should has properly classname', function () {
		const wrapper = render(<TopHeaderBar />);

		expect(wrapper.hasClass('adbu-top-header-bar')).to.be.true;
	});
});
