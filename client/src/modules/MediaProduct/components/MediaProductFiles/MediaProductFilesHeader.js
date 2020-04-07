import React, { useContext, useMemo, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import AdminControlContentHeader, {
	AdminControlContentHeaderLeftSide,
	AdminControlContentHeaderRightSide
} from '../../../../components/AdminControlContentHeader';
import Button from '../../../../baseComponents/Button';
import Typography from '../../../../baseComponents/Typography';

import { MediaProductContext, MediaProductModalsContext, MODALS } from '../../consts';
import { TooltipAction } from '../../../../baseComponents/TooltipAction/TooltipAction';
import { pencil, trash, angleDown, angleUp, layoutGrid3Alt, layoutListThumbAlt } from '../../../../icons';
import classes from './styles/index.scss';
import { getBooleanCookie } from '../../../../utils';

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

	const handleOpenUploadFileModal = () => openModal(MODALS.UPLOAD_FILE_MODAL, { categoryId: activeCategoryId });

	const handleSetGridLayout = () => {
		setMediaProductLayout(!mediaProductGrisLayout);
		setCookie('mediaProductGrisLayout', !mediaProductGrisLayout, { path: '/' });
	};

	const actions = useMemo(() => {
		const isDeleteImagesDisabled = selectedImageIds.length === 0;

		return [
			[
				{
					name: '!!Редактировать категорию',
					icon: pencil,
					iconClass: '',
					action: (id) => console.log(id)
				},
				{
					name: '!!Удалить категорию',
					icon: trash,
					iconClass: classes.mediaProductFilesHeader_deleteIcon,
					action: (id) => console.log(id)
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
	}, [selectedImageIds]);

	const mediaProductGrisLayoutIcon = mediaProductGrisLayout ? layoutListThumbAlt : layoutGrid3Alt;

	return (
		<AdminControlContentHeader padding={{ rTiny: true, lSmall: true }}>
			<AdminControlContentHeaderLeftSide>
				<Typography variant="24">{activeCategoryName}</Typography>
			</AdminControlContentHeaderLeftSide>
			<AdminControlContentHeaderRightSide>
				<div className={classes.mediaProductFilesHeader_right}>
					<Button
						size="small"
						type="primary"
						label="!Загрузить"
						actionHandler={handleOpenUploadFileModal}
						className={classes.mediaProductFilesHeader_UploadButton}
					/>
					<TooltipAction
						actionList={actions}
						targetElementId={activeCategoryId}
						toolTipButtonOpen={(<Button icon={angleUp} />)}
						toolTipButtonClose={(<Button icon={angleDown} />)}
						className={classes.mediaProductFilesHeader_tooltipButton}
					/>
					<Button
						noBorder
						transparent
						icon={mediaProductGrisLayoutIcon}
						actionHandler={handleSetGridLayout}
					/>
				</div>
			</AdminControlContentHeaderRightSide>
		</AdminControlContentHeader>
	);
};

export default MediaProductFilesHeader;
