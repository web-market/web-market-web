import React, { memo, FC } from 'react';

import { Button } from '../../baseComponents/Button/Button';
import { Actions } from './types';

type AdminControlHeaderRightSideActionsPropType = {
    actions: Actions
}


const AdminControlHeaderRightSideActions: FC<AdminControlHeaderRightSideActionsPropType> = memo((
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

export { AdminControlHeaderRightSideActions };
