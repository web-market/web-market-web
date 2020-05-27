import React, { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import List from '../../../../baseComponents/List';
import { products } from '../../testData';
import { productListMatrix } from './productListMatrix';
import { ListContextProvider } from '../../../../baseComponents/List/store/ListContext';
import { ListContext } from '../../../../baseComponents/List/store';
import { getListHeaderTooltipItems, getListInitials, getContentWidth } from '../../../../baseComponents/List/utils';
import { isUndefined } from '../../../../utils';
import { PRODUCTS_LIST_NAME } from '../../consts';
import { ProductsListHeader } from './ProductsListHeader';
import { ProductsListBody } from './ProductsListBody';
import HorizontalScroll from '../../../../baseComponents/HorizontalScrollContainer';

const ProductsList = () => {
	const [get, setCookie, removeCookie] = useCookies();
	const { setListInitials, listState } = useContext(ListContext);

	const { productListState: productListStateFromCookie } = get;

	useEffect(() => {
		if (isUndefined(productListStateFromCookie)) {
			const listInitials = getListInitials(productListMatrix);

			setListInitials({
				listName: PRODUCTS_LIST_NAME,
				state: listInitials
			});

			setCookie('productListState', listInitials, { path: '/' });
		} else {
			setListInitials({
				listName: PRODUCTS_LIST_NAME,
				state: productListStateFromCookie
			});
		}
	}, []);

	useEffect(() => {
		removeCookie('productListState', { path: '/' });
		setCookie('productListState', listState, { path: '/' });
	}, [listState, setCookie, removeCookie]);

	const actionList = getListHeaderTooltipItems(productListMatrix);

	const contentWidth = getContentWidth(productListMatrix, listState);

	return (
		<HorizontalScroll
			contentWidth={contentWidth}
		>
			<List>
				<ProductsListHeader
					listState={listState}
					actionList={actionList}
				/>
				<ProductsListBody
					listState={listState}
					products={products}
				/>
			</List>
		</HorizontalScroll>
	);
};

const ProductsListWithListContext = () => {
	return (
		<ListContextProvider>
			<ProductsList />
		</ListContextProvider>
	);
};

export { ProductsListWithListContext };
