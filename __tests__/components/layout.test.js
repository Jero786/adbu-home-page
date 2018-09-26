import React from 'react';
import {expect} from 'chai';
import {render, shallow} from 'enzyme';
import Layout from 'components/layout/layout';

describe('Layout', () => {

	it('should exist', () => {
		expect((<Layout />)).to.exist;
	});

	it('should has properly classname', function () {
		const wrapper = render(<Layout />);

		expect(wrapper.hasClass('adbu-layout')).to.be.true;
	});

	it('should render properly description', function () {
		const wrapper = shallow(<Layout description="soy-brisa" />);

		expect(wrapper.contains(<meta name="Description" content="soy-brisa" />)).to.equal(true);
	});

	it('should render the same description as title when description is not defined', function () {
		const wrapper = shallow(<Layout title="soy-brisa" />);

		expect(wrapper.contains(<meta name="Description" content="soy-brisa" />)).to.equal(true);
	});

	it('should render the title properly', function () {
		const wrapper = shallow(<Layout title="soy-brisa" />);

		expect(wrapper.find('title').text()).to.equal('soy-brisa');
	});

	it('should render the children properly', function () {
		const wrapper = shallow(<Layout><input type="text" value="brisa-test" /></Layout>);

		expect(wrapper.children()).to.have.lengthOf(3);
	});

});
