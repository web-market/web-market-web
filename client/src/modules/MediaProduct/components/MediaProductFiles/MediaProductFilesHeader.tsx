import React, { useContext, useMemo, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import AdminControlContentHeader, {
	AdminControlContentHeaderLeftSide,
	AdminControlContentHeaderRightSide
} from '../../../../components/AdminControlContentHeader';
import { Typography } from '../../../../baseComponents/Typography/Typography';

import MediaProductFilesHeaderActions from './MediaProductFilesHeaderActions';

import { pencil, trash, layoutGrid3Alt, layoutListThumbAlt, plus } from '../../../../icons';
import classes from './styles/index.scss';
import { getBooleanCookie } from '../../../../utils';
import { MediaProductContext } from '../../store/consts';
import { MediaProductModalsContext, MODALS } from '../MediaProductModalsProvider/const';
import { useGetMediaModuleHandlers } from './hooks';

const MediaProductFilesHeader = () => {
	const [get, setCookie] = useCookies();
	const { mediaProductGrisLayout: mediaProductGrisLayoutFromCookies } = get;
	const { openModal } = useContext(MediaProductModalsContext);
	const {
		selectedImageIds,
		activeCategoryId,
		activeCategoryName,
		setMediaProductLayout,
		mediaProductGrisLayout
	} = useContext(MediaProductContext);

	useEffect(() => {
		setMediaProductLayout(getBooleanCookie(mediaProductGrisLayoutFromCookies));
	}, []);

	const handleOpenUploadFileModal = () => {
        openModal(
            MODALS.UPLOAD_FILE_MODAL,
            {
                categoryId: activeCategoryId
            }
        );
    };

	const handleSetGridLayout = () => {
		setMediaProductLayout(!mediaProductGrisLayout);
		setCookie('mediaProductGrisLayout', !mediaProductGrisLayout, { path: '/' });
	};

	const {
        useEditCategory,
        useAddSubCategory,
        useDeleteMediaCategory
    } = useGetMediaModuleHandlers();

	const actions = useMemo(() => {
		const isDeleteImagesDisabled = selectedImageIds.length === 0;

		return [
			[
				{
					name: '!!Добавить подкатегорию',
					icon: plus,
					iconClass: '',
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    action: (id) => useAddSubCategory(id)
				},
				{
					name: '!!Редактировать категорию',
					icon: pencil,
					iconClass: '',
                    // eslint-disable-next-line react-hooks/rules-of-hooks
					action: (id) => useEditCategory(id)
				},
				{
					name: '!!Удалить категорию',
					icon: trash,
					iconClass: classes.mediaProductFilesHeader_deleteIcon,
                    // eslint-disable-next-line react-hooks/rules-of-hooks
					action: (id) => useDeleteMediaCategory(id)
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
	}, [selectedImageIds, useEditCategory, useAddSubCategory, useDeleteMediaCategory]);

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
