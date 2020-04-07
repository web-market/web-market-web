import {
	SET_PENDING,
	SET_ACTIVE_CATEGORY_ID,
	SET_ACTIVE_CATEGORY_NAME,
	SET_MEDIA_PRODUCT_CATEGORIES,
	SET_SELECTED_PRODUCT_IMAGE_ID,
	DELETE_SELECTED_PRODUCT_IMAGE_ID,
	SET_HAS_MEDIA_PRODUCT_CATEGORIES,
	MEDIA_PRODUCT_IMAGES_GRID_LAYOUT,
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

	const setSelectedImageId = (selectedImageId) => {
		dispatch({
			type: SET_SELECTED_PRODUCT_IMAGE_ID,
			selectedImageId
		});
	};

	const deleteSelectedImageId = (selectedImageId) => {
		dispatch({
			type: DELETE_SELECTED_PRODUCT_IMAGE_ID,
			selectedImageId
		});
	};

	const setMediaProductLayout = (mediaProductGrisLayout) => {
		dispatch({
			type: MEDIA_PRODUCT_IMAGES_GRID_LAYOUT,
			mediaProductGrisLayout
		});
	};

	return {
		setPending,
		setActiveCategory,
		setSelectedImageId,
		deleteSelectedImageId,
		setMediaProductLayout,
		setMediaProductCategories
	};
};
