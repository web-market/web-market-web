import React from 'react';
import { AdminControlHeader } from '../../../../components/AdminControlHeader/AdminControlHeader';

const SupplyDetailHeader = (
    {
        identificationNumber
    }
) => {
    return (
        <AdminControlHeader
            label={`!!Поставка №${identificationNumber}`}
        />
    );
};

export { SupplyDetailHeader };
