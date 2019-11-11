import React from 'react';
import PropTypes from 'prop-types';

import { AdminControlHeaderLeftSide } from './components/AdminControlHeaderLeftSide';
import { AdminControlHeaderRightSide } from './components/AdminControlHeaderRightSide';

import classes from './styles/index.scss';
import { PaddingBox } from '../../../baseComponents/PaddingBox/PaddingBox';

const AdminControlHeader = ({
								label,
								actions,
								onActionClick
							}) => {
	return (
		<PaddingBox
			vrSmall
			hrTiny
			className={classes.adminControlHeader}
		>
			<AdminControlHeaderLeftSide
				label={label}
			/>
			<AdminControlHeaderRightSide
				actions={actions}
				onActionClick={onActionClick}
			/>
		</PaddingBox>
	);
};

AdminControlHeader.defaultProps = {};

AdminControlHeader.propTypes = {
	label: PropTypes.string,
	actions: PropTypes.array,
	onActionClick: PropTypes.func
};

export { AdminControlHeader };
