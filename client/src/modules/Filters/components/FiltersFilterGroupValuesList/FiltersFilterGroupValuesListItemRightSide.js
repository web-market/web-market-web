import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../../baseComponents/Button/Button';
import { ButtonGroupIconButtons } from '../../../../baseComponents/ButtonGroup';

import { pencil, trash } from '../../../../icons';

const FiltersFilterGroupValuesListItemRightSide = (
	{
		id,
		onEditButtonClick,
		handleDeleteFilterGroupValue
	}
) => {
	return (
		<ButtonGroupIconButtons>
			<Button
				size="tiny"
				icon={trash}
				type="danger"
				transparent
				actionHandler={() => handleDeleteFilterGroupValue(id)}
			/>
			<Button
				size="tiny"
				icon={pencil}
				type="secondary"
				transparent
				actionHandler={onEditButtonClick}
			/>
		</ButtonGroupIconButtons>
	);
};

FiltersFilterGroupValuesListItemRightSide.propTypes = {
	id: PropTypes.number,
	onEditButtonClick: PropTypes.func,
	handleDeleteFilterGroupValue: PropTypes.func
};

export default FiltersFilterGroupValuesListItemRightSide;
