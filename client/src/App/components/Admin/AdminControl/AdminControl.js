import React from 'react';
// import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

import UserProfile from '../UserProfile'

import classNames from 'classnames';
import styles from './styles/index.scss';

const AdminControl = () => {
	const componentClassName = classNames(
		styles.adminControl
	);

	return (
		<div className={componentClassName}>
			<Switch>
				<Route path="/adminpanel/userprofile/" component={UserProfile} />
				<Route path="/adminpanel/userprofile/" component={UserProfile} />
			</Switch>
		</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminControl };
