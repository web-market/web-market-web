import { actionLogger } from '../../../utils';

import {
	SET_PENDING,
	SET_ACTIVE_CATEGORY_ID,
	SET_ACTIVE_CATEGORY_NAME,
	SET_MEDIA_PRODUCT_CATEGORIES,
	SET_HAS_MEDIA_PRODUCT_CATEGORIES
} from './consts';

import { mediaProductsDataCategories, hasMediaProductCategories } from '../staticData';

export const initialState = {
	categories: mediaProductsDataCategories,
	activeCategoryId: null,
	activeCategoryName: null,
	hasMediaProductCategories
};

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload, SET_PENDING);

	switch (payload.type) {
		case SET_MEDIA_PRODUCT_CATEGORIES:
			return {
				...state,
				categories: [...payload.categories]
			};
		case SET_HAS_MEDIA_PRODUCT_CATEGORIES:
			return {
				...state,
				hasMediaProductCategories: payload.hasMediaProductCategories
			};
		case SET_ACTIVE_CATEGORY_ID:
			return {
				...state,
				activeCategoryId: payload.activeCategoryId
			};
		case SET_ACTIVE_CATEGORY_NAME:
			// change categories23 => state.categories
			const targetElement = state.categories.find(category => category.id === payload.activeCategoryId);

			return {
				...state,
				activeCategoryName: targetElement.name
			};
		default:
			throw new Error();
	}
};
