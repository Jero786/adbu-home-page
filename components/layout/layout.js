// Resources
import 'commons/commons.scss';
import 'commons/reset.scss';
import './layout.scss';

// Libs
import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import debunce from 'lodash/debounce';

// Components
import TopHeaderBar from 'components/top-header-bar/TopHeaderBar';

class Layout extends React.PureComponent {

	constructor(props) {
		super(props);

		this.onResize = this.onResize.bind(this);
	}

	componentDidMount() {
		this.onResizeDebounced = debunce(this.onResize, 500);

		if (window.addEventListener) {
			window.addEventListener('scroll', this.onScroll);
			window.addEventListener('resize', this.onResizeDebounced);
		} else {
			window.attachEvent('onscroll', this.onScroll);
			window.attachEvent('onresize', this.onResizeDebounced);
		}

		this.onResize(); // call resize to fill state with current device information
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.onScroll);
		window.removeEventListener('resize', this.onResizeDebounced);
		window.removeEventListener('onresize', this.onResizeDebounced);
	}

	/**
	 * This method it's executed to know which device are currently used, or at least
	 * which aspect ratio have.
	 */
	onResize() {
		const {resize} = this.props;

		if (resize) {
			resize();
		}
	}


	/**
	 * This method it's used to know when the scroll are on top of the header or not.
	 */
	onScroll() {

		const headerEl = document.querySelector('.adbu-top-header-bar');
		if (window.pageYOffset > headerEl.offsetTop) {
			headerEl.classList.add('is-sticky');
		} else {
			headerEl.classList.remove('is-sticky');
		}
	}

	render() {
		const {title, children, description} = this.props;
		const someDescription = description ? description : title;
		return (
  <div className="adbu-layout">
    <Head>
      <title>
        {title}
      </title>
      <meta charSet="utf-8" />
      <meta name="Description" content={someDescription} />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    <TopHeaderBar />
    {children}
  </div>
		);
	}
}

Layout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.any,
	description: PropTypes.string,
};

export default Layout;
