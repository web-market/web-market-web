import React, { useContext } from 'react';
import { AdminControlContentBoxFooter } from '../../../../../components/AdminControlContentBox/AdminControlContentBoxFooter';
import { Button } from '../../../../../baseComponents/Button/Button';
import { MarginBox } from '../../../../../baseComponents/MarginBox/MarginBox';
import { FormsGlobalContext } from '../../../../../App/store/FormsGlobalContext';

const SupplyAddFooter = () => {
    const { forms } = useContext(FormsGlobalContext);

    const handleSubmitSupplyForms = () => {
        forms.ADD_SUPPLY_FORM.submitForm();
        forms.ADD_SUPPLY_ROW_PRODUCT_FORM.submitForm();
    };

    return (
        <AdminControlContentBoxFooter>
            <MarginBox hrSmall vrTiny>
                <Button
                    label="!!Сохранить"
                    type="primary"
                    actionHandler={handleSubmitSupplyForms}
                />
            </MarginBox>
        </AdminControlContentBoxFooter>
    );
};

export { SupplyAddFooter };
