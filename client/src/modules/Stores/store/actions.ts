import { useCallback } from 'react';

import {
    addStore as addStoreAPI,
    editStore as editStoreAPI,
    getStore as getStoreAPI,
    deleteStore as deleteStoreAPI,
    getAllStores as getAllStoresAPI
} from '../api';

import {
    SET_PENDING,
    SET_STORES,
    DELETE_STORES
} from './const';

export default (dispatch) => {
    const _setPending = useCallback(pending => {
        dispatch({
            type: SET_PENDING,
            pending
        });
    }, [dispatch]);

    const _deleteStores = useCallback(({ ids }) => {
        dispatch({
            type: DELETE_STORES,
            storesIds: ids
        });
    }, [dispatch]);

    const _setStores = useCallback(stores => {
        dispatch({
            type: SET_STORES,
            stores
        });
    }, [dispatch]);

    const getStores = useCallback(() => {
        _setPending(true);

        return getAllStoresAPI()
            .then(({ data }) => {
                _setStores(data);

                return data;
            })
            .finally(() => _setPending(false));
    }, [_setPending, _setStores]);

    const addStore = useCallback(data => {
        _setPending(true);

        return addStoreAPI(data)
            .then(({ data }) => {
                _setStores([data]);

                return data;
            })
            .catch(e => console.log(e))
            .finally(() => _setPending(false));
    }, [_setPending, _setStores]);

    const deleteStore = useCallback(data => {
        _setPending(true);

        return deleteStoreAPI(data)
            .then(() => _deleteStores(data))
            .catch(e => console.log(e))
            .finally(() => _setPending(false));
    }, [_setPending, _deleteStores]);

    return {
        getStores,
        addStore,
        deleteStore
    };
};
