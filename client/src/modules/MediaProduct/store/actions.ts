import {
    addMediaCategory as addMediaCategoryAPI,
    editMediaCategory as editMediaCategoryAPI,
    getMediaCategories as getMediaCategoriesAPI,
    deleteMediaCategory as deleteMediaCategoryAPI,
    getMediaCategoryDetail as getMediaCategoryDetailAPI,
    getMediaFilesInCategory as getMediaFilesInCategoryAPI,
} from '../api';

import {
	SET_PENDING,
	SET_ACTIVE_CATEGORY_ID,
    SET_MEDIA_FILES,
	SET_ACTIVE_CATEGORY_NAME,
	SET_MEDIA_PRODUCT_CATEGORIES,
	SET_SELECTED_PRODUCT_IMAGE_ID,
	DELETE_SELECTED_PRODUCT_IMAGE_ID,
	MEDIA_PRODUCT_IMAGES_GRID_LAYOUT,
} from './consts';

export default (dispatch) => {
	const _setPending = (pending) => {
		dispatch({
			type: SET_PENDING,
			pending
		});
	};

	const _setMediaProductCategories = (categories) => {
		dispatch({
			type: SET_MEDIA_PRODUCT_CATEGORIES,
			categories
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

    const _setMediaFiles = (mediaFiles) => {
        dispatch({
            type: SET_MEDIA_FILES,
            mediaFiles
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

	const addMediaCategory = (data) => {
		return addMediaCategoryAPI(data);
	};

	const editMediaCategory = (data) => {
		return editMediaCategoryAPI(data);
	};

	const getMediaCategories = () => {
        _setPending(true);

		return getMediaCategoriesAPI()
			.then(({ data }) => {
				_setMediaProductCategories(data);
				return data;
			})
			.finally(() => _setPending(false));
	};

    const getMediaFilesInCategory = (id: number) => {
        _setPending(true);

        return getMediaFilesInCategoryAPI(id)
            .then(({ data }) => {
                _setMediaFiles(data);
                return data;
            })
            .finally(() => _setPending(false));
    };

	const getMediaCategoryDetail = (id) => {
		return getMediaCategoryDetailAPI(id);
	};

	const deleteMediaCategory = (id) => {
		return deleteMediaCategoryAPI(id);
	};

	return {
		addMediaCategory,
		setActiveCategory,
		setSelectedImageId,
		getMediaCategories,
		editMediaCategory,
        getMediaFilesInCategory,
		deleteMediaCategory,
		deleteSelectedImageId,
		setMediaProductLayout,
		getMediaCategoryDetail
	};
};
