import React, { useContext } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';

import classes from './styles/index.scss';
import PropTypes from 'prop-types';
import { ListContext } from './store';

const ListHeaderTooltipListItem = (
	{
		item
	}
) => {
	const { updateListItemState, listState } = useContext(ListContext);

	return (
		<div className={classes.listHeaderTooltipListItem}>
			<Checkbox
				transition={false}
				value={listState[item.itemName]}
				className={classes.listHeaderTooltipListItem_checkbox}
				handleClick={value => updateListItemState({ itemName: item.itemName, itemState: value })}
			/>
			{item.label}
		</div>
	);
};

ListHeaderTooltipListItem.propTypes = {
	item: PropTypes.object
};

export { ListHeaderTooltipListItem };
