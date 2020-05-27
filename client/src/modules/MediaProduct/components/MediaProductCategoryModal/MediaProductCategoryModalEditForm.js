import React from 'react';
import PropTypes from 'prop-types';

import { Textbox, AjaxDropdown } from '../../../../baseComponents/Form/Adapters';
import Form, { Field } from '../../../../baseComponents/Form';
import FormLayout, { FormLayoutItem, FormLayoutItemGroup } from '../../../../baseComponents/FormLayout';

import { EDIT_MEDIA_CATEGORY_FORM, ENDPOINTS } from '../../consts';

const MediaProductCategoryModalEditForm = (
	{
		fieldsMetadata,
		initialValues,
		handleSubmit
	}
) => {
	return (
		<>
			<Form
				onSubmit={handleSubmit}
				initialValues={initialValues}
				name={EDIT_MEDIA_CATEGORY_FORM}
			>
				<FormLayout>
					<FormLayoutItemGroup>
						<FormLayoutItem>
							<Field
								component={Textbox}
								name="name"
								label="!!!Имя категории"
								required
								validate={{
									required: true,
									length: {
										max: 64
									}
								}}
							/>
						</FormLayoutItem>
						<FormLayoutItem>
							<Field
								component={AjaxDropdown}
								name="parentFolderId"
								label="!!!Имя категории"
								hasTooltip
								displayValue={fieldsMetadata.parentFolderId.displayValue}
								toolTipMessage="!Если оставить пустым, то категория будет добавлен на верхний уровень"
								url={ENDPOINTS.GET_MEDIA_CATEGORY_DROP_DOWN}
							/>
						</FormLayoutItem>
					</FormLayoutItemGroup>
				</FormLayout>
			</Form>
		</>
	);
};

MediaProductCategoryModalEditForm.propTypes = {
	fieldsMetadata: PropTypes.object,
	initialValues: PropTypes.object,
	handleSubmit: PropTypes.func,
};

export default MediaProductCategoryModalEditForm;
