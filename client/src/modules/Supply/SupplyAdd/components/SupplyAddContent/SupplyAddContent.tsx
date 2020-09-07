import React from 'react';
import { AdminControlContentBox } from '../../../../../components/AdminControlContentBox/AdminControlContentBox';
import { SupplyAddForm } from '../SupplyAddForm/SupplyAddForm';
import { SupplyAddList } from '../SupplyAddList/SupplyAddList';
import { SupplyAddContextProvider } from '../../store/SupplyAddContext';

const SupplyAddContent = () => {
    return (
        <AdminControlContentBox>
            <SupplyAddForm />
            <SupplyAddContextProvider>
                <SupplyAddList />
            </SupplyAddContextProvider>
        </AdminControlContentBox>
    );
};

export { SupplyAddContent };
