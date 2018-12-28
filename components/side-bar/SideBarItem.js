// Resources
import './SideBarItem.scss';

// Libs
import React from 'react';
import Link from 'next/link';

function SideBarItem({link, displayName}) {
	return (
  <Link href={link}><a className="adbu-sidebar-item" href={link}>{displayName}</a></Link>
	);
}

SideBarItem.propTypes = {};
SideBarItem.defaultProps = {};

export default SideBarItem;
