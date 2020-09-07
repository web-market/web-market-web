import React, { useContext } from 'react';
import { AdminControlHeader } from '../../../../components/AdminControlHeader/AdminControlHeader';
import { MODALS, StoreModalsContext } from '../StoreModalsContextProvider/const';

const StoreHeader = () => {
    const { openModal } = useContext(StoreModalsContext);

    const actions = [
        {
            type: 'primary',
            actionHandler: () => openModal(MODALS.ADD_STORE_MODAL),
            label: '!!Добавить'
        }
    ];

    return (
        <AdminControlHeader
            label="!!Склад"
            actions={actions}
        />
    );
};

export { StoreHeader };
