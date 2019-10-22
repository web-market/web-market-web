import React from 'react';
// import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './styles/index.scss';

const AdminControl = () => {
	const componentClassName = classNames(
		styles.adminControl
	);

	return (
		<div className={componentClassName}>###AdminControl</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminControl };
