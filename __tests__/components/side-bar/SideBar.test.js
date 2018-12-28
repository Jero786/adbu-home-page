// Libs
import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';

// Components
import SideBar from 'components/side-bar/SideBar';
import SideBarItem from 'components/side-bar/SideBarItem';

describe('SideBar', () => {

	it('should exist', () => {
		expect((<SideBar />)).to.exist;
	});

	it('should have the properly classnames', () => {
		const wrapper = render(<SideBar />);

		expect(wrapper.hasClass('adbu-sidebar')).to.be.true;
	});


	it('should show properly the options', function () {
		const wrapper = render(
  <SideBar>
    <SideBarItem link="/services" displayName="Services" />
    <SideBarItem link="/organization" displayName="Culture & Organization" />
  </SideBar>
		);

		expect(wrapper.find('.adbu-sidebar-item').eq(0).text()).to.contains('Services');
		expect(wrapper.find('.adbu-sidebar-item').eq(1).text()).to.contains('Culture & Organization');
	});


	it('should show/hide in a toggle way', function () {
		const wrapper = render(
  <SideBar isVisible>
    <SideBarItem link="/services" displayName="Services" />
    <SideBarItem link="/organization" displayName="Culture & Organization" />
  </SideBar>
		);

		expect(wrapper.hasClass('is-visible')).to.be.true;
	});
});
