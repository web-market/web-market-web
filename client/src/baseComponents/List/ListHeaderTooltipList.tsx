import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';
import { getUniqueKey } from '../../utils';
import { PaddingBox } from '../PaddingBox/PaddingBox';
import { ListHeaderTooltipListItem } from './ListHeaderTooltipListItem';

const ListHeaderTooltipList = (
	{
		actionList
	}
) => {
	return (
		<PaddingBox
			hrTiny
			vrUltraTiny
			className={classes.listHeaderTooltipList}
		>
			{
				actionList.map(item => {
					return (
						<ListHeaderTooltipListItem
							key={getUniqueKey()}
							item={item}
						/>
					);
				})
			}
		</PaddingBox>
	);
};

ListHeaderTooltipList.propTypes = {
	actionList: PropTypes.array
};

export { ListHeaderTooltipList };
