import React from 'react';

import { AdminControlHeaderRightSideActions } from './AdminControlHeaderRightSideActions';
import PropTypes from 'prop-types';

const AdminControlHeaderRightSide = (
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

AdminControlHeaderRightSide.defaultProps = {};

AdminControlHeaderRightSide.propTypes = {
	actions: PropTypes.array
};

export { AdminControlHeaderRightSide };
