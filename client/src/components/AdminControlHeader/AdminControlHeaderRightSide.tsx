import React, { FC } from 'react';

import { AdminControlHeaderRightSideActions } from './AdminControlHeaderRightSideActions';
import { Actions } from './types';

type AdminControlHeaderRightSidePropType = {
    actions: Actions
}

const AdminControlHeaderRightSide: FC<AdminControlHeaderRightSidePropType> = (
	{
		actions
	}
) => {
	return (
		<>
			{actions && (
				<AdminControlHeaderRightSideActions
					actions={actions}
				/>
			)}
		</>
	);
};

export { AdminControlHeaderRightSide };
