import React, { useContext } from 'react';
import {
    AdminControlContentBox
} from '../../../../components/AdminControlContentBox/AdminControlContentBox';
import { RawProductAddForm } from './RawProductAddForm';
import { Button } from '../../../../baseComponents/Button/Button';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';
import { RawProductContext } from '../../store/const';
import { ADD_MODEL_FORM } from '../../const';
import { AppGlobalContext } from '../../../../App/store/AppGlobalContext';

const RawProductsAdd = () => {
    const { forms } = useContext(FormsGlobalContext);
    const { addRawProduct, manufactures, filterValues } = useContext(RawProductContext);
    const { showNotification } = useContext(AppGlobalContext);

    const handleAddRawProduct = (values) => {
        addRawProduct(values)
            .then(() => {
                showNotification({
                    message: `!!Типовый продукт "${values.name}" !!добавлен`
                });
            });
    };

    const rightSectionButtons = (
        <>
            <Button
                label="!!добавить"
                type="primary"
                actionHandler={() => forms.ADD_MODEL_FORM.submitForm()}
            />
        </>
    );

    return (
        <AdminControlContentBox>
            <RawProductAddForm
                name={ADD_MODEL_FORM}
                rightSectionButtons={rightSectionButtons}
                manufactures={manufactures}
                filterValues={filterValues}
                handleSubmit={handleAddRawProduct}
            />
        </AdminControlContentBox>
    );
};

export { RawProductsAdd };
