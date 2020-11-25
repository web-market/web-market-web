import { useCallback } from 'react';

import {
    deleteSupply as deleteSupplyAPI,
    getAllSupplies as getAllSuppliesAPI
} from '../api';

import {
    SET_SUPPLIES,
    SET_PENDING,
    DELETE_SUPPLY
} from './const';

export default (dispatch) => {
    const _setPending = useCallback(pending => {
        dispatch({
            type: SET_PENDING,
            pending
        });
    }, [dispatch]);

    const _deleteSupplies = useCallback(({ ids }) => {
        dispatch({
            type: DELETE_SUPPLY,
            supplyIds: ids
        });
    }, [dispatch]);

    const _setSupplies = useCallback(supplies => {
        dispatch({
            type: SET_SUPPLIES,
            supplies
        });
    }, [dispatch]);

    const getSupplies = useCallback(() => {
        _setPending(true);

        return getAllSuppliesAPI()
            .then(({ data }) => {
                _setSupplies(data);

                return data;
            })
            .finally(() => _setPending(false));
    }, [_setPending, _setSupplies]);

    const deleteSupply = useCallback((supplyIds: string[] | number[]) => {
        _setPending(true);

        return deleteSupplyAPI(supplyIds)
            .then(() => _deleteSupplies(supplyIds))
            .catch(e => console.log(e))
            .finally(() => _setPending(false));
    }, [_setPending, _deleteSupplies]);

    return {
        getSupplies,
        deleteSupply
    };
};
