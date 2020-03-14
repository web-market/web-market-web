import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../baseComponents/Button';
import { ButtonGroupIconButtons } from '../../../../baseComponents/ButtonGroup';

import { close, check } from '../../../../icons';

const FiltersFilterGroupValuesListEditContentRightSide = (
	{
		onEditButtonClick,
		handleRemoteSubmit
	}
) => {
	return (
		<ButtonGroupIconButtons alignCenter>
			<Button
				size="tiny"
				icon={close}
				type="secondary"
				transparent
				actionHandler={onEditButtonClick}
			/>
			<Button
				size="tiny"
				icon={check}
				type="primary"
				transparent
				actionHandler={handleRemoteSubmit}
			/>
		</ButtonGroupIconButtons>
	);
};

FiltersFilterGroupValuesListEditContentRightSide.propTypes = {
	onEditButtonClick: PropTypes.func,
	handleRemoteSubmit: PropTypes.func
};

export default FiltersFilterGroupValuesListEditContentRightSide;
