import React from 'react';
import PropTypes from 'prop-types';

import { Link as RouteLink } from 'react-router-dom';

import styles from './styles/index.scss';

const Link = (
	{
		link,
		label,
		hasRoute
	}
) => {
	const getLink = () => {
		return hasRoute
			? <RouteLink to={link}>{label}</RouteLink>
			: <a className={styles.link} href={link}>{label}</a>
	};

	return getLink();
};

Link.propTypes = {
	label: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	hasRoute: PropTypes.bool.isRequired
};

export { Link };
