import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../baseComponents/Button';

import { pencil, trash } from '../../../../icons';
import classes from './styles/index.scss';

const FiltersFilterGroupValuesListItemRightSide = (
	{
		id,
		onEditButtonClick,
		handleDeleteFilterGroupValue
	}
) => {
	return (
		<div className={classes.filtersFilterGroupValuesListItemRightSide}>
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
				className={classes.filtersFilterGroupValuesListItemRightSide_editButton}
			/>
		</div>
	);
};

FiltersFilterGroupValuesListItemRightSide.propTypes = {
	id: PropTypes.number,
	onEditButtonClick: PropTypes.func,
	handleDeleteFilterGroupValue: PropTypes.func
};

export default FiltersFilterGroupValuesListItemRightSide;
