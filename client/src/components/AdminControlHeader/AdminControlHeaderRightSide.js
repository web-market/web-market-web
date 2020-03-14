import React from 'react';

import { AdminControlHeaderRightSideActions } from './AdminControlHeaderRightSideActions';
import PropTypes from 'prop-types';

const AdminControlHeaderRightSide = ({
										actions,
										onActionClick
									}) => {
	return (
		<>
			{actions && (
				<AdminControlHeaderRightSideActions
					actions={actions}
					onActionClick={onActionClick}
				/>
			)}
		</>
	);
};

AdminControlHeaderRightSide.defaultProps = {};

AdminControlHeaderRightSide.propTypes = {
	actions: PropTypes.array,
	onActionClick: PropTypes.func
};

export { AdminControlHeaderRightSide };
