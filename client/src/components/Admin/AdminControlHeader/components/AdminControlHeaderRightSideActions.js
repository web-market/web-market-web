import React from 'react';

import Button from '../../../../baseComponents/Button';
import PropTypes from 'prop-types';

const AdminControlHeaderRightSideActions = ({
												actions,
												onActionClick
											}) => {
	const getSingleAction = () => {
		return (
			<Button
				type={actions[0].type}
				transparent={actions[0].transparent}
				icon={actions[0].icon}
				actionName={actions[0].actionName}
				actionHandler={onActionClick}
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
};

AdminControlHeaderRightSideActions.defaultProps = {};

AdminControlHeaderRightSideActions.propTypes = {
	actions: PropTypes.array
};

export { AdminControlHeaderRightSideActions };
