import React from 'react';
import PropTypes from 'prop-types';

import Form, { Field } from '../../../../baseComponents/Form';
import { Textbox } from '../../../../baseComponents/Form/Adapters';
import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';
import { GridLayoutRow, GridLayout } from '../../../../baseComponents/GridLayout';
import { Button } from '../../../../baseComponents/Button/Button';
import HeaderText from '../../../../baseComponents/HeaderText';

import classes from './styles/index.scss';
import { check } from '../../../../icons';
import { ADD_FILTER_VALUE_FORM } from '../../consts';

const FiltersAddFilterGroupValueForm = (
	{
		id,
		isPending,
		handleSubmit,
		handleAddFilterValue
	}
) => {
	return (
		<PaddingBox
			small
			className={classes.filtersAddFilterValue_form}
		>
			<HeaderText
				className={classes.filtersAddFilterGroupValueForm}
				size="4"
			>
				!!Добавить фильтр
			</HeaderText>
			<Form
				name={`${ADD_FILTER_VALUE_FORM}-${id}`}
				onSubmit={handleAddFilterValue}
			>
				<GridLayout>
					<GridLayoutRow
						gridColumn={15}
						grid="6-_1-5-_2-1"
						alignItems="end"
					>
						<Field
							component={Textbox}
							name="value"
							label="Имя фильтра"
							validate={{
								required: true
							}}
						/>
						<Field
							component={Textbox}
							name="sortOrder"
							label="Порядок"
							hasTooltip
							toolTipMessage="!!!Место фильтра в общем списке фильтров (например: '5')"
							validate={{
								required: true,
								number: true
							}}
						/>
						<Button
							icon={check}
							type="primary"
							size="small"
							transparent
							hasPendig
							isPending={isPending}
							actionHandler={handleSubmit}
							className={classes.filtersAddFilterValue_addButton}
						/>
					</GridLayoutRow>
				</GridLayout>
			</Form>
		</PaddingBox>
	);
};

FiltersAddFilterGroupValueForm.propTypes = {
	id: PropTypes.number,
	isPending: PropTypes.bool,
	handleSubmit: PropTypes.func,
	handleAddFilterValue: PropTypes.func
};

export default FiltersAddFilterGroupValueForm;
