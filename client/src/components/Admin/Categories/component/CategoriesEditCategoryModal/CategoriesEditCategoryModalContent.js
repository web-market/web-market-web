import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalFooter, ModalContent } from '../../../../../baseComponents/Modal';
import ButtonGroup from '../../../../../baseComponents/ButtonGroup';
import Button from '../../../../../baseComponents/Button';
import { EDIT_CATEGORY_FORM_NAME, ENDPOINT } from '../../consts';
import FormLayout, {
	FormLayoutItem,
	FormLayoutItemGroup
} from '../../../../../baseComponents/FormLayout';
import { AjaxDropdown, Checkbox, Textbox } from '../../../../../baseComponents/Form/Adapters';
import Form, { Field } from '../../../../../baseComponents/Form';
import { FormsGlobalContext } from '../../../../../App/store/FormsGlobalContext';
import { CategoriesContext } from '../../store';

const CategoriesEditCategoryModalContent = (
	{
		modalData,
		handleClose
	}
) => {
	const { forms } = useContext(FormsGlobalContext);

	const { updateCategory, getCategory } = useContext(CategoriesContext);

	useEffect(() => {
		getCategory(modalData.id);
	}, [modalData.id, getCategory]);

	const handleEditCategory = (values) => {
		updateCategory(values);
	};

	const leftButtons = (
		<Button
			actionHandler={handleClose}
			label="!!Закрыть"
			type="secondary"
		/>
	);

	const rightButtons = (
		<Button
			actionHandler={() => forms.editCategoryForm.submitForm()}
			label="!!Редактировать"
			type="primary"
		/>
	);

	return (
		<>
			<ModalHeader
				handleClose={handleClose}
				label="!!!Редактирование категории"
			/>
			<ModalContent>
				<Form
					onSubmit={handleEditCategory}
					name={EDIT_CATEGORY_FORM_NAME}
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

CategoriesEditCategoryModalContent.defaultProps = {};

CategoriesEditCategoryModalContent.propTypes = {
	modalData: PropTypes.object
};

export default CategoriesEditCategoryModalContent;
