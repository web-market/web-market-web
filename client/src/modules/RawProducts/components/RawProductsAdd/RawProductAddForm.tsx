import React, { FC } from 'react';

import {
    FormLayoutFooter,
    FormLayoutHeader,
    FormLayoutItem,
    FormLayoutItemGroup
} from '../../../../baseComponents/FormLayout';
import Form, { Field } from '../../../../baseComponents/Form';
import { Textbox, Textarea, Dropdown } from '../../../../baseComponents/Form/Adapters';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
// eslint-disable-next-line import/extensions
import { ReactElement } from '../../../../../typings/modules/react';
import { FilterValuesProps, Manufactures, RawProductProps } from '../../store/types';

type RawProductAddFormProps = {
    name: string;
    editMode?: boolean;
    rightSectionButtons: ReactElement<any>;
    manufactures: Manufactures;
    filterValues: FilterValuesProps;
    initialValues?: { };
    handleSubmit: (values: RawProductProps) => void;
};

const RawProductAddForm:FC<RawProductAddFormProps> = (
    {
        name,
        rightSectionButtons,
        filterValues,
        manufactures,
        initialValues,
        handleSubmit,
        editMode
    }
) => {
    return (
        <Form
            name={name}
            onSubmit={handleSubmit}
            initialValues={initialValues}
        >
            {
                !editMode && (
                    <FormLayoutHeader title="!!!Добавить типовый товар" />
                )
            }
            <FormLayoutItemGroup>
                <FormLayoutItem>
                    <Field
                        component={Textbox}
                        name="name"
                        label="!!!Название"
                        validate={{
                            required: true,
                            length: {
                                min: 5,
                                max: 64
                            }
                        }}
                    />
                </FormLayoutItem>
                <FormLayoutItem>
                    <Field
                        items={manufactures}
                        component={Dropdown}
                        name="manufacturerId"
                        label="!!!Производитель"
                        validate={{
                            required: true,
                        }}
                    />
                </FormLayoutItem>
                <FormLayoutItem>
                    <Field
                        items={filterValues}
                        component={Dropdown}
                        multiSelect
                        name="filterValueIds"
                        label="!!!Фильтры"
                        validate={{
                            required: true,
                        }}
                    />
                </FormLayoutItem>
                <FormLayoutItem>
                    <Field
                        component={Textarea}
                        name="description"
                        label="!!!Описание"
                        validate={{
                            length: {
                                max: 256
                            }
                        }}
                    />
                </FormLayoutItem>
            </FormLayoutItemGroup>
            {
                !editMode && (
                    <FormLayoutFooter>
                        <ButtonGroup rightButtons={rightSectionButtons} />
                    </FormLayoutFooter>
                )
            }
        </Form>
    );
};

RawProductAddForm.defaultProps = {
    editMode: false
};

export { RawProductAddForm };
