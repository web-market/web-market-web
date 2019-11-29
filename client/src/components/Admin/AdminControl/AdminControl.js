import React from 'react';
// import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';
import UserProfile from '../UserProfile';
import Category from '../Category';

import classNames from 'classnames';
import classes from './styles/index.scss';
import { URL } from '../consts';

const AdminControl = () => {
	const componentClassName = classNames(
		classes.adminControl
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
