import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Textbox } from '../../../Textbox';
import Button from '../../../Button';
import { ButtonGroupIconButtons } from '../../../ButtonGroup';
import PaddingBox from '../../../PaddingBox';

import classes from './styles/index.scss';
import ClassNames from 'classnames';
import { close, pencil, check } from '../../../../icons';

const GeneralUploaderItem = (
	{
		name,
		index,
		extension,
		handleRemoveFile,
		handleChangeFileName
	}
) => {
	const [isEdit, setIsEdit] = useState(false);
	const [fileName, setFileName] = useState('');

	const componentClassName = ClassNames(
		classes.generalUploaderItem,
		{
			[classes.generalUploaderItem_editMode]: isEdit
		}
	);

	const handleFileNameEdit = (value) => {
		setFileName(value);
	};

	const handleFileNameChange = () => {
		setIsEdit(!isEdit);
		handleChangeFileName(`${fileName}.${extension}`, index);
	};

	return (
		<PaddingBox
			tiny
			className={componentClassName}
		>
			{
				!isEdit && (
					<>
						<div>
							{name}
							<span className={classes.generalUploaderItem_extension}>.{extension}</span>
						</div>
						<ButtonGroupIconButtons>
							<Button
								size="tiny"
								icon={close}
								type="danger"
								transparent
								actionHandler={() => handleRemoveFile(index)}
							/>
							<Button
								size="tiny"
								icon={pencil}
								type="secondary"
								transparent
								actionHandler={() => setIsEdit(!isEdit)}
							/>
						</ButtonGroupIconButtons>
					</>
				)
			}
			{
				isEdit && (
					<>
						<div>
							<Textbox
								value={fileName || name}
								onFieldChange={handleFileNameEdit}
								className={classes.generalUploaderItem_input}
							/>
							<span className={classes.generalUploaderItem_extension}>.{extension}</span>
						</div>
						<ButtonGroupIconButtons alignCenter>
							<Button
								size="tiny"
								icon={close}
								type="secondary"
								transparent
								actionHandler={() => setIsEdit(!isEdit)}
							/>
							<Button
								size="tiny"
								icon={check}
								type="primary"
								transparent
								actionHandler={handleFileNameChange}
							/>
						</ButtonGroupIconButtons>
					</>
				)
			}
		</PaddingBox>

	);
};

GeneralUploaderItem.propTypes = {
	name: PropTypes.string,
	index: PropTypes.number,
	extension: PropTypes.string,
	handleRemoveFile: PropTypes.func,
	handleChangeFileName: PropTypes.func
};

export default GeneralUploaderItem;
