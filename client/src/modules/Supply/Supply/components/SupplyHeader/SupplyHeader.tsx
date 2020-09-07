import React from 'react';
import { AdminControlHeader } from '../../../../../components/AdminControlHeader/AdminControlHeader';
import { useHistory } from 'react-router-dom';
import { URL } from '../../../../../components/consts';

const SupplyHeader = () => {
    const { push } = useHistory();

    const actions = [
        {
            type: 'primary',
            actionHandler: () => push(URL.STORE.ADD_SUPPLY),
            label: '!!Добавить'
        }
    ];

    return (
        <AdminControlHeader
            label="!!Поставки"
            actions={actions}
        />
    );
};

export { SupplyHeader };
