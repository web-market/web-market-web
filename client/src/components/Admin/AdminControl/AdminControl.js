import React from 'react';
// import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';
import UserProfile from '../UserProfile';
import Category from '../Category';

import classNames from 'classnames';
import styles from './styles/index.scss';
import { URL } from '../consts';

const AdminControl = () => {
	const componentClassName = classNames(
		styles.adminControl
	);

	return (
		<div className={componentClassName}>
			<Switch>
				<Route path={URL.USER_PROFILE} component={UserProfile} />
				<Route path={URL.CATEGORY} component={Category} />
			</Switch>
		</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminControl };
