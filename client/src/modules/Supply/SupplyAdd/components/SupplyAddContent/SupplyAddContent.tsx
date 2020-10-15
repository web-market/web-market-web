import React, { useCallback, useContext, useState, useRef } from 'react';
import { AdminControlContentBox } from '../../../../../components/AdminControlContentBox/AdminControlContentBox';
import { SupplyAddForm } from '../SupplyAddForm/SupplyAddForm';
import { SupplyAddList } from '../SupplyAddList/SupplyAddList';
import { SupplyAddContextProvider } from '../../store/SupplyAddContext';
import {createSupply, validateSupplyIdentificationNumber} from '../../api';
import { isNullOrUndefined } from '../../../../../utils';
import { AppGlobalContext } from '../../../../../App/store/AppGlobalContext';
import { FormsGlobalContext } from '../../../../../App/store/FormsGlobalContext';
import { useGetRawProducts } from '../../hooks';
import { normalizeAddedItems, normalizeSupplyData } from '../../utils';

const SupplyAddContent = () => {
    const { showNotification } = useContext(AppGlobalContext);
    const { forms } = useContext(FormsGlobalContext);
    const formsDataRef = useRef({});
    const { ADD_SUPPLY_FORM } = forms;
    const [supplyIdentificationNumber, setSupplyIdentificationNumber] = useState('');

    const handleSupplySubmit = (values) => {
        formsDataRef.current = { ...values };
    };

    const handleSupplyRawProductSubmit = (values) => {
        const normalizedData = normalizeSupplyData(formsDataRef.current);
        const normalizedItems = normalizeAddedItems(values);

        createSupply({ ...normalizedData, supplyRawProductAudit: normalizedItems });
    };

    const rawProducts = useGetRawProducts();

    const validateIdentificationNumber = useCallback(value => {
        if (isNullOrUndefined(value) || supplyIdentificationNumber === value) return;
        setSupplyIdentificationNumber(value);

        validateSupplyIdentificationNumber({ identificationNumber: value })
            .then(({ data }) => {
               if (!data) {
                   showNotification(
                       {
                           type: 'danger',
                           message: '!!поставка с таким идентификатором уже существует'
                       }
                   );

                   ADD_SUPPLY_FORM.setFieldValidationResult(
                       {
                           isValid: false,
                           errorMessages: ['!!поставка с таким идентификатором уже существует']
                       },
                       'identificationNumber'
                   );
               }
            });
    }, [supplyIdentificationNumber, ADD_SUPPLY_FORM, showNotification]);

    return (
        <AdminControlContentBox>
            <SupplyAddForm
                handleSupplySubmit={handleSupplySubmit}
                validateIdentificationNumber={validateIdentificationNumber}
            />
            <SupplyAddContextProvider>
                <SupplyAddList
                    rawProducts={rawProducts}
                    handleSupplyRawProductSubmit={handleSupplyRawProductSubmit}
                />
            </SupplyAddContextProvider>
        </AdminControlContentBox>
    );
};

export { SupplyAddContent };
