import { useCallback } from 'react';

import {
    addSupply as addSupplyAPI,
    editSupply as editSupplyAPI,
    getSupply as getSupplyAPI,
    deleteSupply as deleteSupplyAPI,
    getAllSupplies as getAllSuppliesAPI
} from '../api';

import {
    SET_PENDING,
    SET_SUPPLY,
    DELETE_SUPPLY
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
            type: DELETE_SUPPLY,
            supplyIds: ids
        });
    }, [dispatch]);

    const _setStores = useCallback(supply => {
        dispatch({
            type: SET_SUPPLY,
            supply
        });
    }, [dispatch]);

    const getSupplies = useCallback(() => {
        _setPending(true);

        return getAllSuppliesAPI()
            .then(({ data }) => {
                _setStores(data);

                return data;
            })
            .finally(() => _setPending(false));
    }, [_setPending, _setStores]);

    const addSupply = useCallback(data => {
        _setPending(true);

        return addSupplyAPI(data)
            .then(({ data }) => {
                _setStores([data]);

                return data;
            })
            .catch(e => console.log(e))
            .finally(() => _setPending(false));
    }, [_setPending, _setStores]);

    const deleteSupply = useCallback(data => {
        _setPending(true);

        return deleteSupplyAPI(data)
            .then(() => _deleteStores(data))
            .catch(e => console.log(e))
            .finally(() => _setPending(false));
    }, [_setPending, _deleteStores]);

    return {
        getSupplies,
        addSupply,
        deleteSupply
    };
};
