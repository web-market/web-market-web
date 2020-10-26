import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ListRowItem, ListRow } from '../../../../../baseComponents/List';
import { productListMatrix, productListMatrixItemsName } from './productListMatrix';
import { getUniqueKey, isUndefined } from '../../../../../utils';
import { Checkbox } from '../../../../../baseComponents/Checkbox/Checkbox';

const ProductsListBody = (
	{
		products,
		listState
	}
) => {
	const getRowItems = useCallback((product) => {
		const rowItems = [];

		!isUndefined(listState) && productListMatrix.forEach(item => {
			const key = getUniqueKey();

			if (listState[item.itemName] && item.itemName === productListMatrixItemsName.checkbox) {
				rowItems.push(
					<ListRowItem
						key={key}
						width={item.width}
					>
						<Checkbox />
					</ListRowItem>
				);
			}

			if (listState[item.itemName] && item.itemName === productListMatrixItemsName.image) {
				rowItems.push(
					<ListRowItem
						key={key}
						width={item.width}
					>
						<img alt={product.name} src={product.image} />
					</ListRowItem>
				);
			}
			if (listState[item.itemName] && item.itemName === productListMatrixItemsName.name) {
				rowItems.push(
					<ListRowItem
						key={key}
						width={item.width}
					>
						{product.name}
					</ListRowItem>
				);
			}
			if (listState[item.itemName] && item.itemName === productListMatrixItemsName.setNumber) {
				rowItems.push(
					<ListRowItem
						key={key}
						width={item.width}
					>
						{product.setNumber}
					</ListRowItem>
				);
			}
			if (listState[item.itemName] && item.itemName === productListMatrixItemsName.inStock) {
				rowItems.push(
					<ListRowItem
						key={key}
						width={item.width}
					>
						{product.inStock}
					</ListRowItem>
				);
			}
			if (listState[item.itemName] && item.itemName === productListMatrixItemsName.price) {
				rowItems.push(
					<ListRowItem
						key={key}
						width={item.width}
					>
						{product.price}
						<br />
						{product.priceDiscount}
					</ListRowItem>
				);
			}
			if (listState[item.itemName] && item.itemName === productListMatrixItemsName.categories) {
				rowItems.push(
					<ListRowItem
						key={key}
						width={item.width}
					>
						{product.categories}
					</ListRowItem>
				);
			}
			if (listState[item.itemName] && item.itemName === productListMatrixItemsName.date) {
				rowItems.push(
					<ListRowItem
						key={key}
						width={item.width}
					>
						{product.creationDate}
					</ListRowItem>
				);
			}
		});

		return rowItems;
	}, [listState]);

	return (
		<>
			{
				products.map(product => {
					const rowItems = getRowItems(product);

					return (
						<ListRow
							pointer
							key={getUniqueKey()}
						>
							{rowItems}
						</ListRow>
					);
				})
			}
		</>
	);
};

ProductsListBody.propTypes = {
	products: PropTypes.array,
	listState: PropTypes.object
};

export { ProductsListBody };
