import React from 'react';
import PropTypes from 'prop-types';
import { getUniqueKey, isUndefined } from '../../../../../utils';
import { productListMatrix } from './productListMatrix';
import { ListHeader, ListHeaderItem } from '../../../../../baseComponents/List';

const ProductsListHeader = (
	{
		listState,
		actionList
	}
) => {
	return (
		<ListHeader
			actionList={actionList}
		>
			{
				!isUndefined(listState) && productListMatrix.map(item => {
					if (listState[item.itemName]) {
						const key = getUniqueKey();

						return (
							<ListHeaderItem
								key={key}
								label={item.label}
								action={item.action}
								width={item.width}
								icon={item.icon}
							/>
						);
					}

					return null;
				})
			}
		</ListHeader>
	);
};

ProductsListHeader.propTypes = {
	actionList: PropTypes.array,
	listState: PropTypes.object
};

export { ProductsListHeader };
