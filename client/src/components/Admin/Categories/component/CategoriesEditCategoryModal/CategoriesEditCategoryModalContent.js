import React, { useEffect, useContext, useState, useMemo, useCallback } from 'react';
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
import { isNull } from '../../../../../utils';

const CategoriesEditCategoryModalContent = (
	{
		modalData,
		handleClose: handleCloseFromProps
	}
) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { forms } = useContext(FormsGlobalContext);

	const { updateCategory, getCategory } = useContext(CategoriesContext);

	const handleClose = useCallback(() => {
		setData(null);
		handleCloseFromProps();
	}, [handleCloseFromProps]);

	useEffect(() => {
		setIsPending(true);

			getCategory(modalData.id)
			.then(({ data }) => setData(data))
			.catch(e => {
				console.log(e);
				handleClose();
			})
			.finally(() => setIsPending(false));
	}, [modalData.id, getCategory, handleClose]);

	const handleUpdateCategory = (values) => {
		setIsPending(true);

		updateCategory({ ...values, id: modalData.id })
			.then(() => handleClose())
			.catch(e => {
				console.log(e);
				handleClose();
			});
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

	const initialValues = useMemo(() => {
		if (isNull(data)) return null;

		const {
			name,
			sortOrder,
			color,
			isActive,
			parentCategory
			} = data;

		const parentCategoryId = isNull(parentCategory) ? null : parentCategory.id;

		return {
			name,
			sortOrder,
			color,
			isActive,
			parentCategoryId
		};
	}, [data]);

	const fieldsMetadata = useMemo(() => {
		if (isNull(data) || isNull(data.parentCategory)) {
			return {
				parentCategoryMetadata: {
					displayValue: ''
				}
			};
		}

		const {
			parentCategory
		} = data;

		return {
			parentCategoryMetadata: {
				displayValue: parentCategory.name
			}
		};
	}, [data]);

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
				/>
			</ModalFooter>
		</>
	);
};

CategoriesEditCategoryModalContent.propTypes = {
	modalData: PropTypes.object
};

export default CategoriesEditCategoryModalContent;
