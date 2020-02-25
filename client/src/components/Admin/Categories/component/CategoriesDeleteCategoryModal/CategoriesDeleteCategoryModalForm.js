import React from 'react';
import { ModalContent, ModalFooter, ModalHeader } from '../../../../../baseComponents/Modal';

import Form, { Field } from '../../../../../baseComponents/Form';
import { DELETE_CATEGORY_FORM } from '../../consts';
import FormLayout, { FormLayoutItem, FormLayoutItemGroup } from '../../../../../baseComponents/FormLayout';
import { Checkbox } from '../../../../../baseComponents/Form/Adapters';
import ButtonGroup from '../../../../../baseComponents/ButtonGroup';
import PropTypes from 'prop-types';

const CategoriesDeleteCategoryModalForm = (
	{
		isPending,
		handleClose,
		leftButtons,
		rightButtons,
		handleDeleteCategory
	}
) => {
	return (
		<>
			<ModalHeader
				handleClose={handleClose}
				label="!!!Удаление категории"
			/>
			<ModalContent isPending={isPending}>
				<Form
					onSubmit={handleDeleteCategory}
					name={DELETE_CATEGORY_FORM}
				>
					<FormLayout>
						<FormLayoutItemGroup>
							<FormLayoutItem>
								<Field
									component={Checkbox}
									name="deleteChildCategories"
									label="!!!Удалить дочернии категории?"
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

CategoriesDeleteCategoryModalForm.defaultProps = {};

CategoriesDeleteCategoryModalForm.propTypes = {
	isPending: PropTypes.bool,
	handleClose: PropTypes.func,
	leftButtons: PropTypes.object,
	rightButtons: PropTypes.object,
	handleDeleteCategory: PropTypes.func
};

export default CategoriesDeleteCategoryModalForm;
