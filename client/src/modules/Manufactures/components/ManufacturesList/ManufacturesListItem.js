import React from 'react';
import PropTypes from 'prop-types';

import PaddingBox from '../../../../baseComponents/PaddingBox';

import classes from './styles/index.scss';
import { TooltipAction } from '../../../../baseComponents/TooltipAction/TooltipAction';

const ManufacturesListItem = (
	{
		id,
		name,
		actions,
		handleItemClick
	}
) => {
	return (
		<div onClick={() => handleItemClick(id)}>
			<PaddingBox
				hrSmall
				className={classes.manufacturesListItem}
			>
				<div>{name}</div>
				<TooltipAction
					targetElementId={id}
					actionList={actions}
				/>
			</PaddingBox>
		</div>
	);
};

ManufacturesListItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	actions: PropTypes.array,
	handleItemClick: PropTypes.func,
};

export default ManufacturesListItem;
