import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';

import classes from './styles/index.scss';

const ListHeaderItem = (
	{
		action,
		label,
		width,
		icon
	}
) => {
	return (
		<div
			className={classes.listHeaderItem}
			style={{ width }}
			onClick={action}
		>
			{
				icon && (
					<Icon icon={icon} />
				)
			}
			{
				label && (label)
			}
		</div>
	);
};

ListHeaderItem.propTypes = {
	action: PropTypes.func,
	label: PropTypes.string,
	icon: PropTypes.string,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

export { ListHeaderItem };
