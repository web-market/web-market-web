import React from 'react';
import { ModalContent, ModalFooter, ModalHeader } from '../../../../../baseComponents/Modal';
import Form, { Field } from '../../../../../baseComponents/Form';
import { EDIT_CATEGORY_FORM, ENDPOINT } from '../../consts';
import FormLayout, { FormLayoutItem, FormLayoutItemGroup } from '../../../../../baseComponents/FormLayout';
import { AjaxDropdown, Checkbox, Textbox } from '../../../../../baseComponents/Form/Adapters';
import ButtonGroup from '../../../../../baseComponents/ButtonGroup';
import PropTypes from 'prop-types';

const CategoriesEditCategoryModalForm = (
	{
		isPending,
		handleClose,
		initialValues,
		handleUpdateCategory,
		fieldsMetadata,
		leftButtons,
		rightButtons
	}
) => {
	return (
		<>
			<ModalHeader
				handleClose={handleClose}
				label="!!!Редактирование категории"
			/>
			<ModalContent isPending={isPending}>
				<Form
					initialValues={initialValues}
					onSubmit={handleUpdateCategory}
					name={EDIT_CATEGORY_FORM}
				>
					<FormLayout>
						<FormLayoutItemGroup>
							<FormLayoutItem>
								<Field
									component={Textbox}
									name="name"
									label="!!!Название категории"
									required
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
									url={ENDPOINT.GET_ALL_CATEGORIES}
									displayValue={fieldsMetadata.parentCategoryMetadata.displayValue}
								/>
							</FormLayoutItem>
							<FormLayoutItem>
								<Field
									component={Textbox}
									name="sortOrder"
									label="!!!Порядок отображения категории"
									hasTooltip
									toolTipMessage="!!!Место категории в общем списке категорий (например: 5)"
									validate={{
										number: true
									}}
								/>
							</FormLayoutItem>
							<FormLayoutItem>
								<Field
									component={Textbox}
									name="color"
									label="!!!Цвет"
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
					</FormLayout>
					<button type="submit">asdasdas</button>
				</Form>
			</ModalContent>
			<ModalFooter>
				<ButtonGroup
					leftButtons={leftButtons}
					rightButtons={rightButtons}
					initialValues={initialValues}
				/>
			</ModalFooter>
		</>
	);
};

CategoriesEditCategoryModalForm.defaultProps = {};

CategoriesEditCategoryModalForm.propTypes = {
	isPending: PropTypes.bool,
	handleClose: PropTypes.func,
	initialValues: PropTypes.object,
	leftButtons: PropTypes.object,
	rightButtons: PropTypes.object,
	fieldsMetadata: PropTypes.object,
	handleUpdateCategory: PropTypes.func
};

export default CategoriesEditCategoryModalForm;
