import React from 'react';
import PropTypes from 'prop-types';

import { AdminControlHeaderLeftSide } from './AdminControlHeaderLeftSide';
import { AdminControlHeaderRightSide } from './AdminControlHeaderRightSide';

import classes from './styles/index.scss';
import { PaddingBox } from '../../baseComponents/PaddingBox/PaddingBox';

const AdminControlHeader = (
	{
		label,
		actions
	}
) => {
	return (
		<PaddingBox
			hrSmall
			className={classes.adminControlHeader}
		>
			<AdminControlHeaderLeftSide
				label={label}
			/>
			<AdminControlHeaderRightSide
				actions={actions}
			/>
		</PaddingBox>
	);
};

AdminControlHeader.defaultProps = {
	actions: []
};

AdminControlHeader.propTypes = {
	label: PropTypes.string,
	actions: PropTypes.array
};

export { AdminControlHeader };
