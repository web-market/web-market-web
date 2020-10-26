import React from 'react';
import { MarginBox } from '../../../../../baseComponents/MarginBox/MarginBox';
import Form, { Field } from '../../../../../baseComponents/Form';
import { ADD_SUPPLY_FORM, ENDPOINTS } from '../../const';
import { FormLayoutItemGroup } from '../../../../../baseComponents/FormLayout';
import { AjaxDropdown, Textarea, DatePicker, Textbox } from '../../../../../baseComponents/Form/Adapters';
import { GridLayout } from '../../../../../baseComponents/GridLayout';
import { SupplyAddFormField } from './SupplyAddFormField';

const SupplyAddForm = (
    {
        handleSupplySubmit,
        validateIdentificationNumber
    }
) => {
    return (
        <MarginBox small>
            <Form
                onSubmit={handleSupplySubmit}
                name={ADD_SUPPLY_FORM}
            >
                <FormLayoutItemGroup>
                    <GridLayout>
                        <SupplyAddFormField
                            label="!!дата и время поставки"
                            required
                        >
                            <Field
                                name="arrivalDate"
                                component={DatePicker}
                                validate={{
                                    required: true
                                }}
                                showTime
                                currentDate
                                minDate={0}
                            />
                        </SupplyAddFormField>
                        <SupplyAddFormField
                            label="!!номер поставки"
                            required
                        >
                            <Field
                                name="identificationNumber"
                                component={Textbox}
                                onFieldBLur={value => validateIdentificationNumber(value)}
                                validate={{
                                    required: true,
                                    length: {
                                        max: 25
                                    }
                                }}
                            />
                        </SupplyAddFormField>
                        <SupplyAddFormField
                            label="!!поставщик"
                            required
                        >
                            <Field
                                name="provider"
                                component={AjaxDropdown}
                                url={ENDPOINTS.GET_PROVIDERS}
                                validate={{
                                    required: true
                                }}
                            />
                        </SupplyAddFormField>
                        <SupplyAddFormField
                            label="!!склад"
                            required
                        >
                            <Field
                                name="store"
                                component={AjaxDropdown}
                                url={ENDPOINTS.GET_STORES}
                                validate={{
                                    required: true
                                }}
                            />
                        </SupplyAddFormField>
                        <SupplyAddFormField
                            label="!!Комментарий"
                        >
                            <Field
                                name="comment"
                                component={Textarea}
                                validate={{
                                    length: {
                                        max: 64
                                    }
                                }}
                            />
                        </SupplyAddFormField>
                    </GridLayout>
                </FormLayoutItemGroup>
            </Form>
        </MarginBox>
    );
};

export { SupplyAddForm };
