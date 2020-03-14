import React from 'react';
import PropTypes from 'prop-types';

import { AdminControlHeaderLeftSide } from './AdminControlHeaderLeftSide';
import { AdminControlHeaderRightSide } from './AdminControlHeaderRightSide';

import classes from './styles/index.scss';
import { PaddingBox } from '../../baseComponents/PaddingBox/PaddingBox';

const AdminControlHeader = ({
								label,
								onActionClick
							}) => {
	return (
		<PaddingBox
			hrSmall
			className={classes.adminControlHeader}
		>
			<AdminControlHeaderLeftSide
				label={label}
			/>
			<AdminControlHeaderRightSide
				actions={[]}
				onActionClick={onActionClick}
			/>
		</PaddingBox>
	);
};

AdminControlHeader.defaultProps = {};

AdminControlHeader.propTypes = {
	label: PropTypes.string,
	// actions: PropTypes.array,
	onActionClick: PropTypes.func
};

export { AdminControlHeader };
