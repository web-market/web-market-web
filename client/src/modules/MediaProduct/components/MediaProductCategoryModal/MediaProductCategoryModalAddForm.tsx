import React from 'react';
import PropTypes from 'prop-types';

import { Textbox, AjaxDropdown } from '../../../../baseComponents/Form/Adapters';
import Form, { Field } from '../../../../baseComponents/Form';
import { FormLayoutItem, FormLayoutItemGroup } from '../../../../baseComponents/FormLayout';

import { ADD_MEDIA_CATEGORY_FORM, ENDPOINTS } from '../../consts';

const MediaProductCategoryModalAddForm = (
	{
		isSubCategory,
		handleSubmit
	}
) => {
	return (
		<>
			<Form
				onSubmit={handleSubmit}
				name={ADD_MEDIA_CATEGORY_FORM}
			>
				<FormLayoutItemGroup>
					<FormLayoutItem>
						<Field
							component={Textbox}
							name="name"
							label="!!!Имя категории"
							validate={{
								required: true,
								length: {
									max: 64
								}
							}}
						/>
					</FormLayoutItem>
					{
						!isSubCategory && (
							<FormLayoutItem>
								<Field
									component={AjaxDropdown}
									name="parentFolderId"
									label="!!!Имя категории"
									hasTooltip
                                    toolTipMessage="!Если пустое, то категория будет добавлен на верхний уровень"
									url={ENDPOINTS.GET_MEDIA_CATEGORY_DROP_DOWN}
								/>
							</FormLayoutItem>
						)
					}
				</FormLayoutItemGroup>
			</Form>
		</>
	);
};

MediaProductCategoryModalAddForm.propTypes = {
	isSubCategory: PropTypes.bool,
	handleSubmit: PropTypes.func
};

export default MediaProductCategoryModalAddForm;
