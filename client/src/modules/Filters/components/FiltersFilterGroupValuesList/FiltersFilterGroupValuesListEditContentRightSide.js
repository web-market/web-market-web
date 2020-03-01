import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../baseComponents/Button';

import ClassName from 'classnames';
import classes from './styles/index.scss';
import { close, check } from '../../../../icons';

const FiltersFilterGroupValuesListEditContentRightSide = (
	{
		onEditButtonClick
	}
) => {
	const componentClassName = ClassName(
		classes.filtersFilterGroupValuesListItemRightSide,
		classes.filtersFilterGroupValuesListEditContentRightSide
	);

	return (
		<div className={componentClassName}>
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
				// actionHandler={onEditButtonClick}
				className={classes.filtersFilterGroupValuesListItemRightSide_editButton}
			/>
		</div>
	);
};

FiltersFilterGroupValuesListEditContentRightSide.propTypes = {
	onEditButtonClick: PropTypes.func
};

export default FiltersFilterGroupValuesListEditContentRightSide;
