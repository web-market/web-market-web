import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import { NavigationGlobalContext } from '../../App/store/NavigationGlobalContext';

import Icon from '../../baseComponents/Icon';

import { angleDoubleRight, angleDoubleLeft } from '../../icons';
import classes from './styles/index.scss';
import ClassNames from 'classnames';

const AdminNavigationCollapsedButton = (
	{
		primaryNavigation
	}
) => {
	const { collapseNavigation, isCollapsed } = useContext(NavigationGlobalContext);

	const componentClassName = ClassNames(
		{
			[classes.adminNavigationCollapsedButton_primaryNavigation]: primaryNavigation
		},
		classes.adminNavigationCollapsedButton
	);

	const handleCollapseNavigation = useCallback(() => {
		collapseNavigation(!isCollapsed);
	}, [collapseNavigation, isCollapsed]);

	return (
		<div
			onClick={handleCollapseNavigation}
			className={componentClassName}
		>
			<Icon
				icon={isCollapsed ? angleDoubleRight : angleDoubleLeft}
				className={classes.adminNavigationCollapsedButton_icon}
			/>
		</div>
	);
};

AdminNavigationCollapsedButton.defaultProps = {
	primaryNavigation: false
};

AdminNavigationCollapsedButton.propTypes = {
	primaryNavigation: PropTypes.bool
};

export default AdminNavigationCollapsedButton;
