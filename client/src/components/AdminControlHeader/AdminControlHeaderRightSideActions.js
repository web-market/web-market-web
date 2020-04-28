import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Button from '../../baseComponents/Button';

const AdminControlHeaderRightSideActions = memo((
	{
		actions
	}
) => {
	const getSingleAction = () => {
		return (
			<Button
				type={actions[0].type}
				icon={actions[0].icon}
				label={actions[0].label}
				actionName={actions[0].actionName}
				transparent={actions[0].transparent}
				actionHandler={actions[0].actionHandler}
			/>
		);
	};

	const getActions = () => {
		return actions.length === 1
				? getSingleAction()
				: null;
	};

	return (
		<>
			{getActions()}
		</>
	);
});

AdminControlHeaderRightSideActions.defaultProps = {};

AdminControlHeaderRightSideActions.propTypes = {
	actions: PropTypes.array
};

export { AdminControlHeaderRightSideActions };
