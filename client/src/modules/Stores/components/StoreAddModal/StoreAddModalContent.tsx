import React, { FC, useContext, useState } from 'react';
import { Button } from '../../../../baseComponents/Button/Button';
import { ModalContent, ModalFooter, ModalHeader } from '../../../../baseComponents/Modal';
import { ButtonGroup } from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import Form, { Field } from '../../../../baseComponents/Form';
import { FORMS } from '../StoreModalsContextProvider/const';
import { Textbox } from '../../../../baseComponents/Form/Adapters';
import { FormLayoutItem, FormLayoutItemGroup } from '../../../../baseComponents/FormLayout';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';
import { StoreContext } from '../../store/const';
import { AppGlobalContext } from '../../../../App/store/AppGlobalContext';
import { StoreAddModalContentPropsType } from './types';

const StoreAddModalContent:FC<StoreAddModalContentPropsType> = (
    {
        handleClose
    }
) => {
    const { forms } = useContext(FormsGlobalContext);
    const { addStore } = useContext(StoreContext);
    const { showNotification } = useContext(AppGlobalContext);

    const [isPending, setIsPending] = useState(false);

    const handleSubmit = values => {
        setIsPending(true);

        addStore(values)
            .then((data) => {
                setIsPending(false);
                handleClose();

                showNotification({
                    type: 'info',
                    message: `!!Склад "${data.name}" !!добавлен`
                });
            });
    };

    return (
        <>
            <ModalHeader
                label="!!Новый склад"
                handleClose={handleClose}
            />
            <ModalContent
                isPending={isPending}
            >
                <Form
                    onSubmit={handleSubmit}
                    name={FORMS.ADD_STORE_FORM}
                >
                    <FormLayoutItemGroup>
                        <FormLayoutItem>
                            <Field
                                component={Textbox}
                                name="name"
                                label="!!!Название склада"
                                validate={{
                                    required: true,
                                    length: {
                                        max: 64
                                    }
                                }}
                            />
                        </FormLayoutItem>
                    </FormLayoutItemGroup>
                </Form>
            </ModalContent>
            <ModalFooter>
                <ButtonGroup
                    leftButtons={(
                        <Button
                            label="!закрыть"
                            actionHandler={() => handleClose()}
                        />
                    )}
                    rightButtons={(
                        <Button
                            type="primary"
                            label="!Добавить"
                            actionHandler={() => forms[FORMS.ADD_STORE_FORM].submitForm()}
                        />
                    )}
                />
            </ModalFooter>
        </>
    );
};

export { StoreAddModalContent };
