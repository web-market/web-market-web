import React, { useContext, useMemo } from 'react';

import AdminControlContentHeader, {
	AdminControlContentHeaderLeftSide,
	AdminControlContentHeaderRightSide
} from '../../../../components/AdminControlContentHeader';
import Button from '../../../../baseComponents/Button';

import { MediaProductContext, MediaProductModalsContext, MODALS } from '../../consts';
import { TooltipAction } from '../../../../baseComponents/TooltipAction/TooltipAction';
import { pencil, trash, angleDown, angleUp } from '../../../../icons';
import classes from './styles/index.scss';

const MediaProductFilesHeader = () => {
	const { activeCategoryName, activeCategoryId } = useContext(MediaProductContext);
	const { openModal } = useContext(MediaProductModalsContext);

	const handleOpenUploadFileModal = () => openModal(MODALS.UPLOAD_FILE_MODAL, { categoryId: activeCategoryId });

	const actions = useMemo(() => {
		return [
			{
				name: '!!Редактировать',
				icon: pencil,
				iconClass: '',
				action: () => {}
			},
			{
				name: '!!Удалить',
				icon: trash,
				iconClass: classes.mediaProductFilesHeader_deleteIcon,
				action: () => {}
			}
		];
	}, []);

	return (
		<AdminControlContentHeader padding={{ hrSmall: true }}>
			<AdminControlContentHeaderLeftSide>
				<div>{activeCategoryName}</div>
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
						toolTipButtonOpen={(<Button icon={angleUp} />)}
						toolTipButtonClose={(<Button icon={angleDown} />)}
					/>
				</div>
			</AdminControlContentHeaderRightSide>
		</AdminControlContentHeader>
	);
};

export default MediaProductFilesHeader;
