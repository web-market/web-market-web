import React from 'react';
import PropTypes from 'prop-types';

import { Link as RouteLink, NavLink } from 'react-router-dom';

import styles from './styles/index.scss';

const Link = (
	{
		link,
		label,
		hasRoute,
		activeLinkClass
	}
) => {
	const getRouteLink = () => {
		return activeLinkClass
			? <NavLink to={link} activeClassName={activeLinkClass}>{label}</NavLink>
			: <RouteLink to={link}>{label}</RouteLink>;
	};

	const getLink = () => {
		return hasRoute
			? getRouteLink()
			: <a className={styles.link} href={link}>{label}</a>;
	};

	return getLink();
};

Link.propTypes = {
	label: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	hasRoute: PropTypes.bool.isRequired,
	activeLinkClass: PropTypes.string
};

export { Link };
