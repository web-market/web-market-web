import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '../../baseComponents/Typography/Typography';

const AdminControlHeaderLeftSide = (
	{
		label
	}
) => {
	return (
		<div>
			<Typography
				variant="24"
				bold="400"
			>
				{label}
			</Typography>
		</div>
	);
};

AdminControlHeaderLeftSide.defaultProps = {};

AdminControlHeaderLeftSide.propTypes = {
	label: PropTypes.string.isRequired
};

export { AdminControlHeaderLeftSide };
