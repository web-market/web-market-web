import React from 'react';
import PropTypes from 'prop-types';

import { AdminControlHeaderLeftSide } from './components/AdminControlHeaderLeftSide';
import { AdminControlHeaderRightSide } from './components/AdminControlHeaderRightSide';

import classes from './styles/index.scss';

const AdminControlHeader = ({
								label,
								actions,
								onActionClick
							}) => {
	return (
		<div className={classes.adminControlHeader}>
			<AdminControlHeaderLeftSide
				label={label}
			/>
			<AdminControlHeaderRightSide
				actions={actions}
				onActionClick={onActionClick}
			/>
		</div>
	);
};

AdminControlHeader.defaultProps = {};

AdminControlHeader.propTypes = {
	label: PropTypes.string,
	actions: PropTypes.array,
	onActionClick: PropTypes.func
};

export { AdminControlHeader };
