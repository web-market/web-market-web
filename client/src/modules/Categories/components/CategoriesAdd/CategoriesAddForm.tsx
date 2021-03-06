import React from 'react';
import PropTypes from 'prop-types';

import Form, { Field } from '../../../../baseComponents/Form';

import {
	Checkbox,
	Textbox,
	AjaxDropdown,
	ColorPicker
} from '../../../../baseComponents/Form/Adapters';

import {
	FormLayoutHeader,
	FormLayoutFooter,
	FormLayoutItem,
	FormLayoutItemGroup
} from '../../../../baseComponents/FormLayout';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';

import { ADD_CATEGORY_FORM, ENDPOINT } from '../../consts';

const CategoriesAddForm = (
    {
        addCategory,
        rightSectionButtons
    }
) => {
	return (
		<Form
			onSubmit={addCategory}
			name={ADD_CATEGORY_FORM}
		>
            <FormLayoutHeader title="!!!Добавить категорию" />
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
                        url={ENDPOINT.GET_ALL_CATEGORIES}
                        allowRequest
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
            <FormLayoutFooter>
                <ButtonGroup rightButtons={rightSectionButtons} />
            </FormLayoutFooter>
		</Form>
	);
};

CategoriesAddForm.propTypes = {
	addCategory: PropTypes.func,
	rightSectionButtons: PropTypes.object
};

export default CategoriesAddForm;
