import React from 'react';
import PropTypes from 'prop-types';

import { Link as RouteLink, NavLink } from 'react-router-dom';

import styles from './styles/index.scss';

const Link = (
	{
		link,
		content,
		hasRoute,
		routeLinkClass,
		activeLinkClass
	}
) => {
	const getRouteLink = () => {
		return activeLinkClass
			? (
				<NavLink
					to={link}
					className={routeLinkClass}
					activeClassName={activeLinkClass}
				>
					{content}
				</NavLink>
			)
			: (
				<RouteLink
					to={link}
					className={routeLinkClass}
				>
					{content}
				</RouteLink>
			);
	};

	const getLink = () => {
		return hasRoute
			? getRouteLink()
			: <a className={styles.link} href={link}>{content}</a>;
	};

	return getLink();
};

Link.propTypes = {
	content: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.object.isRequired,
	]),
	link: PropTypes.string.isRequired,
	hasRoute: PropTypes.bool.isRequired,
	routeLinkClass: PropTypes.string,
	activeLinkClass: PropTypes.string
};

export { Link };
