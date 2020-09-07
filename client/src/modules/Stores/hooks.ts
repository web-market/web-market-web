import { useContext, useEffect } from 'react';
import { StoreContext } from './store/const';
import { MODALS, StoreModalsContext } from './components/StoreModalsContextProvider/const';

export const useGetStores = () => {
    const { getStores } = useContext(StoreContext);

    useEffect(() => {
        getStores();
    }, [getStores]);
};

export const useDeleteStore = () => {
    const { openModal } = useContext(StoreModalsContext);
    const { deleteStore: deleteStoreAPI } = useContext(StoreContext);

    const deleteStore = (e, store) => {
        e.stopPropagation();

        const { id, name } = store;
        // todo: create bulk delete

        openModal(
            MODALS.DELETE_STORE_MODAL,
            {
                modalTitle: '!!Удалить склад',
                rightButtonLabel: '!!Удалить',
                handleSubmit: () => deleteStoreAPI({ ids: [id] }),
                content: `!!Вы уверены, что хотите удалить склад: "${name}"?`
            }
        );
    };

    return { deleteStore };
};
