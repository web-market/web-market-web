import React, { useContext } from 'react';
import { ModalContent, ModalFooter, ModalHeader } from '../../../../baseComponents/Modal';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import { Button } from '../../../../baseComponents/Button/Button';
import { getArrayElementByKey } from '../../../../utils';
import { RawProductContext } from '../../store/const';
import { RawProductAddForm } from '../RawProductsAdd/RawProductAddForm';
import { EDIT_RAW_PRODUCT_FORM } from '../../const';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';
import { AppGlobalContext } from '../../../../App/store/AppGlobalContext';

const RawProductsEditModalContent = (
    {
        handleClose,
        modalData
    }
) => {
    const { rawProducts, manufactures, updateRawProduct, filterValues } = useContext(RawProductContext);
    const { forms } = useContext(FormsGlobalContext);
    const { showNotification } = useContext(AppGlobalContext);
    const currentItem = getArrayElementByKey(rawProducts, modalData.id);

    const handleEditRawProduct = values => {
        updateRawProduct(values)
            .then(() => {
                showNotification({
                    message: `!!Типовый продукт "${values.name}" !!отредактирован`
                });
                handleClose();
            });
    };

    const rightSectionButtons = (
        <>
            <Button
                label="!!Редактировать"
                type="primary"
                actionHandler={() => forms.ADD_RAW_PRODUCT_FORM.submitForm()}
            />
        </>
    );

    return (
        <>
            <ModalHeader
                handleClose={handleClose}
                label={`!!Редактировать: ${currentItem?.name}`}
            />
            <ModalContent>
                <RawProductAddForm
                    editMode
                    initialValues={currentItem}
                    name={EDIT_RAW_PRODUCT_FORM}
                    rightSectionButtons={rightSectionButtons}
                    manufactures={manufactures}
                    filterValues={filterValues}
                    handleSubmit={handleEditRawProduct}
                />
            </ModalContent>
            <ModalFooter>
                <ButtonGroup
                    leftButtons={(
                        <Button
                            label="!!Закрыть"
                            type="secondary"
                            actionHandler={handleClose}
                        />
                    )}
                    rightButtons={(
                        <Button
                            label="!!Редактировать"
                            type="primary"
                            actionHandler={() => forms.EDIT_RAW_PRODUCT_FORM.submitForm()}
                        />
                    )}
                />
            </ModalFooter>
        </>
    );
};

export { RawProductsEditModalContent };
