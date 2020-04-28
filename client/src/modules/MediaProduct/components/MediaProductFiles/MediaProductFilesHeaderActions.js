import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../baseComponents/Button';
import { TooltipAction } from '../../../../baseComponents/TooltipAction/TooltipAction';
import { angleDown, angleUp } from '../../../../icons';
import classes from './styles/index.scss';

const MediaProductFilesHeaderActions = (
	{
		actions,
		activeCategoryId,
		handleSetGridLayout,
		handleOpenUploadFileModal,
		mediaProductGrisLayoutIcon
	}
) => {
	return (
		<div className={classes.mediaProductFilesHeader_right}>
			<Button
				size="small"
				type="primary"
				label="загрузить"
				transparent
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
	);
};

MediaProductFilesHeaderActions.propTypes = {
	actions: PropTypes.array,
	activeCategoryId: PropTypes.number,
	handleSetGridLayout: PropTypes.func,
	handleOpenUploadFileModal: PropTypes.func,
	mediaProductGrisLayoutIcon: PropTypes.string
};

export default MediaProductFilesHeaderActions;
