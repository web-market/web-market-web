import React, { useContext, useCallback } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';

import { NavigationGlobalContext } from '../../App/store/NavigationGlobalContext';

import Icon from '../../baseComponents/Icon';

import { angleDoubleRight, angleDoubleLeft } from '../../icons';
import classes from './styles/index.scss';
import ClassNames from 'classnames';
import { getBooleanCookie } from '../../utils';

const AdminNavigationCollapsedButton = (
	{
		primaryNavigation
	}
) => {
	const [get, setCookie] = useCookies();
	const { collapseNavigation, isCollapsed } = useContext(NavigationGlobalContext);

	const componentClassName = ClassNames(
		{
			[classes.adminNavigationCollapsedButton_primaryNavigation]: primaryNavigation
		},
		classes.adminNavigationCollapsedButton
	);

	const handleCollapseNavigation = useCallback(() => {
		const collapsedState = isCollapsed === 'false' ? 'true' : 'false';

		collapseNavigation(collapsedState);
		setCookie('isCollapsed', collapsedState, { path: '/' });
	}, [collapseNavigation, isCollapsed, setCookie]);

	const collapseButtonIcon = getBooleanCookie(isCollapsed) ? angleDoubleRight : angleDoubleLeft;

	return (
		<div
			className={componentClassName}
		>
			<div className={classes.adminNavigationCollapsedButton_separator}></div>
			<div
				onClick={handleCollapseNavigation}
				className={classes.adminNavigationCollapsedButton_button}
			>
				<Icon
					icon={collapseButtonIcon}
					className={classes.adminNavigationCollapsedButton_icon}
				/>
			</div>
		</div>
	);
};

AdminNavigationCollapsedButton.defaultProps = {
	primaryNavigation: false
};

AdminNavigationCollapsedButton.propTypes = {
	primaryNavigation: PropTypes.bool
};

export { AdminNavigationCollapsedButton };
