import React, { useContext, useMemo, useEffect, useCallback } from 'react';
import { useCookies } from 'react-cookie';

import AdminControlContentHeader, {
	AdminControlContentHeaderLeftSide,
	AdminControlContentHeaderRightSide
} from '../../../../components/AdminControlContentHeader';
import Typography from '../../../../baseComponents/Typography';

import MediaProductFilesHeaderActions from './MediaProductFilesHeaderActions';

import { MediaProductContext, MediaProductModalsContext, MODALS } from '../../consts';
import { pencil, trash, layoutGrid3Alt, layoutListThumbAlt, plus } from '../../../../icons';
import classes from './styles/index.scss';
import { getBooleanCookie } from '../../../../utils';

const MediaProductFilesHeader = () => {
	const [get, setCookie] = useCookies();
	const { mediaProductGrisLayout: mediaProductGrisLayoutFromCookies } = get;
	const { openModal } = useContext(MediaProductModalsContext);
	const {
		categories,
		selectedImageIds,
		activeCategoryId,
		setActiveCategory,
		activeCategoryName,
		getMediaCategories,
		deleteMediaCategory: deleteMediaCategoryAction,
		setMediaProductLayout,
		mediaProductGrisLayout,
		getMediaCategoryDetail
	} = useContext(MediaProductContext);

	useEffect(() => {
		setMediaProductLayout(getBooleanCookie(mediaProductGrisLayoutFromCookies));
	}, []);

	const handleOpenUploadFileModal = () => openModal(MODALS.UPLOAD_FILE_MODAL, { categoryId: activeCategoryId });

	const handleSetGridLayout = () => {
		setMediaProductLayout(!mediaProductGrisLayout);
		setCookie('mediaProductGrisLayout', !mediaProductGrisLayout, { path: '/' });
	};

	const selectedCategory = useMemo(() => {
		return categories.find(item => item.id === activeCategoryId);
	}, [activeCategoryId, categories]);

	const deleteMediaCategory = useCallback((id) => {
		return deleteMediaCategoryAction(id)
			.then(() => {
				return getMediaCategories();
			})
			.then((data) => {
				if (data.length !== 0) {
					setActiveCategory(data[0].id);
				}
			});
	}, [deleteMediaCategoryAction, getMediaCategories, setActiveCategory]);

	const handleAddSubCategory = useCallback((id) => {
		openModal(
			MODALS.MEDIA_CATEGORY_MODAL,
			{
				categoryId: id,
				isSubCategory: true,
				categoryName: selectedCategory.name
			}
		);
	}, [openModal, selectedCategory]);

	const handleEditCategory = useCallback((id) => {
		return getMediaCategoryDetail(id)
			.then(({ data }) => {
				openModal(
					MODALS.MEDIA_CATEGORY_MODAL,
					{
						categoryId: id,
						isEditMode: true,
						initialValues: data,
						categoryName: selectedCategory.name
					}
				);
			})
			.catch(error => console.log(error));
	}, [openModal, getMediaCategoryDetail, selectedCategory]);

	const handleDeleteMediaCategory = useCallback((id) => {
		openModal(
			MODALS.DELETE_MEDIA_CATEGORY_MODAL,
			{
				modalTitle: '!!Удалить протзводителя',
				rightButtonLabel: '!!Удалить',
				handleSubmit: () => deleteMediaCategory(id),
				content: (
					<span>!!Вы уверены, что хотите удалить категорию <strong>{selectedCategory.name}</strong>?</span>
				)
			}
		);
	}, [openModal, deleteMediaCategory, selectedCategory]);

	const actions = useMemo(() => {
		const isDeleteImagesDisabled = selectedImageIds.length === 0;

		return [
			[
				{
					name: '!!Добавить подкатегорию',
					icon: plus,
					iconClass: '',
					action: (id) => handleAddSubCategory(id)
				},
				{
					name: '!!Редактировать категорию',
					icon: pencil,
					iconClass: '',
					action: (id) => handleEditCategory(id)
				},
				{
					name: '!!Удалить категорию',
					icon: trash,
					iconClass: classes.mediaProductFilesHeader_deleteIcon,
					action: (id) => handleDeleteMediaCategory(id)
				}
			],
			[
				{
					name: '!!Удалить изображения',
					icon: trash,
					iconClass: classes.mediaProductFilesHeader_deleteIcon,
					action: (id) => console.log(id),
					disabled: isDeleteImagesDisabled,
				}
			]
		];
	}, [selectedImageIds, handleDeleteMediaCategory, handleAddSubCategory]);

	const mediaProductGrisLayoutIcon = mediaProductGrisLayout ? layoutListThumbAlt : layoutGrid3Alt;

	return (
		<AdminControlContentHeader padding={{ rTiny: true, lSmall: true }}>
			<AdminControlContentHeaderLeftSide>
				<Typography variant="24">{activeCategoryName}</Typography>
			</AdminControlContentHeaderLeftSide>
			<AdminControlContentHeaderRightSide>
				<MediaProductFilesHeaderActions
					actions={actions}
					activeCategoryId={activeCategoryId}
					handleSetGridLayout={handleSetGridLayout}
					handleOpenUploadFileModal={handleOpenUploadFileModal}
					mediaProductGrisLayoutIcon={mediaProductGrisLayoutIcon}
				/>
			</AdminControlContentHeaderRightSide>
		</AdminControlContentHeader>
	);
};

export default MediaProductFilesHeader;
