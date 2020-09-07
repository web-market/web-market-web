import React from 'react';
import PropTypes from 'prop-types';

import { ModalContent, ModalFooter, ModalHeader } from '../../../../baseComponents/Modal';
import Form, { Field } from '../../../../baseComponents/Form';
import { FormLayoutItem, FormLayoutItemGroup } from '../../../../baseComponents/FormLayout';
import { Textbox } from '../../../../baseComponents/Form/Adapters';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import { EDIT_FILTER_FORM } from '../../consts';

const FiltersEditFilterModalForm = (
	{
		handleClose,
		leftButtons,
		rightButtons,
		initialValues,
		handleUpdateFilter
	}
) => {
	return (
		<>
			<ModalHeader
				handleClose={handleClose}
				label="!!!Редактировать фильтр"
			/>
			<ModalContent>
				<Form
					name={EDIT_FILTER_FORM}
					initialValues={initialValues}
					onSubmit={handleUpdateFilter}
				>
					<FormLayoutItemGroup>
						<FormLayoutItem>
							<Field
								component={Textbox}
								name="name"
								label="!!!Имя группы фильтра в админ панеле"
								validate={{
									required: true
								}}
							/>
						</FormLayoutItem>
						<FormLayoutItem>
							<Field
								component={Textbox}
								name="displayName"
								label="!!!Имя группы фильтраа в магазине"
								validate={{
									required: true
								}}
							/>
						</FormLayoutItem>
						<FormLayoutItem>
							<Field
								component={Textbox}
								name="sortOrder"
								label="!!!Порядок сортировки"
								hasTooltip
								toolTipMessage="!!!Место группы в общем списке груп фильтров (например: '5')"
								validate={{
									number: true
								}}
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

FiltersEditFilterModalForm.propTypes = {
	handleClose: PropTypes.func,
	leftButtons: PropTypes.object,
	rightButtons: PropTypes.object,
	initialValues: PropTypes.object,
	handleUpdateFilter: PropTypes.func
};

export default FiltersEditFilterModalForm;
