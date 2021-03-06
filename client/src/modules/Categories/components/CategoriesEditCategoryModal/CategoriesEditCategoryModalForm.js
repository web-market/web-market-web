import React from 'react';
import { ModalContent, ModalFooter, ModalHeader } from '../../../../baseComponents/Modal';

import Form, { Field } from '../../../../baseComponents/Form';
import { EDIT_CATEGORY_FORM, ENDPOINT } from '../../consts';
import { FormLayoutItem, FormLayoutItemGroup } from '../../../../baseComponents/FormLayout';
import { AjaxDropdown, Checkbox, ColorPicker, Textbox } from '../../../../baseComponents/Form/Adapters';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import PropTypes from 'prop-types';

const CategoriesEditCategoryModalForm = (
	{
		id,
		isPending,
		handleClose,
		leftButtons,
		rightButtons,
		initialValues,
		fieldsMetadata,
		handleUpdateCategory
	}
) => {
	return (
		<>
			<ModalHeader
				handleClose={handleClose}
				label="!!!Редактировать категорию"
			/>
			<ModalContent isPending={isPending}>
				<Form
					initialValues={initialValues}
					onSubmit={handleUpdateCategory}
					name={EDIT_CATEGORY_FORM}
				>
					<FormLayoutItemGroup>
						<FormLayoutItem>
							<Field
								component={Textbox}
								name="name"
								label="!!!Название категории"
								validate={{
									required: true
								}}
							/>
						</FormLayoutItem>
						<FormLayoutItem>
							<Field
								component={AjaxDropdown}
								name="parentCategoryId"
								label="!!!Родительская категория"
								placeholder="!Выберите категорию"
								hasTooltip
								toolTipMessage="!Если оставить "
								url={`${ENDPOINT.GET_AVAILABLE_PARENT_CATEGORIES}/${id}`}
								displayValue={fieldsMetadata.parentCategoryMetadata.displayValue}
								hasDefaultValue
							/>
						</FormLayoutItem>
						<FormLayoutItem>
							<Field
								component={Textbox}
								name="sortOrder"
								label="!!!Порядок сортировки"
								hasTooltip
								toolTipMessage="!!!Место категории в общем списке категорий (например: 5)"
								validate={{
									number: true
								}}
							/>
						</FormLayoutItem>
						<FormLayoutItem>
							<Field
								component={ColorPicker}
								name="color"
								label="!!!Цвет категории"
								validate={{
									length: {
										equal: 7,
									}
								}}
							/>
						</FormLayoutItem>
						<FormLayoutItem>
							<Field
								component={Checkbox}
								name="isActive"
								label="!!!Активная категория"
							/>
						</FormLayoutItem>
					</FormLayoutItemGroup>
				</Form>
			</ModalContent>
			<ModalFooter>
				<ButtonGroup
					leftButtons={leftButtons}
					rightButtons={rightButtons}
				/>
			</ModalFooter>
		</>
	);
};

CategoriesEditCategoryModalForm.propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	isPending: PropTypes.bool,
	handleClose: PropTypes.func,
	initialValues: PropTypes.object,
	leftButtons: PropTypes.object,
	rightButtons: PropTypes.object,
	fieldsMetadata: PropTypes.object,
	handleUpdateCategory: PropTypes.func
};

export default CategoriesEditCategoryModalForm;
