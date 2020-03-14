import {
	SET_PENDING,
	SET_ACTIVE_CATEGORY_ID,
	SET_ACTIVE_CATEGORY_NAME,
	SET_MEDIA_PRODUCT_CATEGORIES,
	SET_HAS_MEDIA_PRODUCT_CATEGORIES
} from './consts';

export default (dispatch) => {
	const setPending = (pending) => {
		dispatch({
			type: SET_PENDING,
			pending
		});
	};

	const setMediaProductCategories = (categories) => {
		dispatch({
			type: SET_MEDIA_PRODUCT_CATEGORIES,
			categories
		});

		dispatch({
			type: SET_HAS_MEDIA_PRODUCT_CATEGORIES,
			hasMediaProductCategories: categories.length !== 0
		});
	};

	const setActiveCategory = (activeCategoryId) => {
		dispatch({
			type: SET_ACTIVE_CATEGORY_ID,
			activeCategoryId
		});

		dispatch({
			type: SET_ACTIVE_CATEGORY_NAME,
			activeCategoryId
		});
	};

	return {
		setPending,
		setActiveCategory,
		setMediaProductCategories
	};
};
