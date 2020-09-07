import React from 'react';
import { MarginBox } from '../../../../../baseComponents/MarginBox/MarginBox';
import Form, { Field } from '../../../../../baseComponents/Form';
import { ADD_SUPPLY_FORM } from '../../const';
import { FormLayoutItem, FormLayoutItemGroup } from '../../../../../baseComponents/FormLayout';
import { Dropdown, Textarea, DatePicker } from '../../../../../baseComponents/Form/Adapters';
import { GridLayout, GridLayoutRow } from '../../../../../baseComponents/GridLayout';
import { Typography } from '../../../../../baseComponents/Typography/Typography';

const SupplyAddForm = () => {
    const handleSubmit = values => {
        console.log(values);
    };

    return (
        <MarginBox small>
            <Form
                onSubmit={handleSubmit}
                name={ADD_SUPPLY_FORM}
            >
                <FormLayoutItemGroup>
                    <GridLayout>
                        <FormLayoutItem>
                            <GridLayoutRow
                                grid="3-_1-6"
                            >
                                <Typography>
                                    !!дата и время поставки
                                </Typography>
                                <Field
                                    name="date"
                                    component={DatePicker}
                                    required
                                    showTime
                                    currentDate
                                    minDate={0}
                                />
                            </GridLayoutRow>
                        </FormLayoutItem>
                        <FormLayoutItem>
                            <GridLayoutRow
                                grid="3-_1-6"
                            >
                                <Typography>
                                    !!поставщик
                                </Typography>
                                <Field
                                    name="providerId"
                                    component={Dropdown}
                                    validate={{
                                        required: true
                                    }}
                                />
                            </GridLayoutRow>
                        </FormLayoutItem>
                        <FormLayoutItem>
                            <GridLayoutRow
                                grid="3-_1-6"
                            >
                                <Typography>
                                    !!склад
                                </Typography>
                                <Field
                                    name="storeId"
                                    component={Dropdown}
                                    validate={{
                                        required: true
                                    }}
                                />
                            </GridLayoutRow>
                        </FormLayoutItem>
                        <FormLayoutItem>
                            <GridLayoutRow
                                grid="3-_1-6"
                            >
                                <Typography>
                                    !!Комментарий
                                </Typography>
                                <Field
                                    name="comment"
                                    component={Textarea}
                                    required
                                    validate={{
                                        length: {
                                            max: 64
                                        }
                                    }}
                                />
                            </GridLayoutRow>
                        </FormLayoutItem>
                    </GridLayout>
                </FormLayoutItemGroup>
            </Form>
        </MarginBox>
    );
};

export { SupplyAddForm };
