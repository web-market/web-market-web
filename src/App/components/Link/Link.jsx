import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/index.scss';

const Link = (
	{
		link,
		title
	}
) => {
	return (
		<a className={styles.link} href={link}>{title}</a>
	);
};

Link.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export { Link };
