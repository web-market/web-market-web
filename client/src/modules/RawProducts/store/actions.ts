import { useCallback } from 'react';

import {
    addRawProduct as addRawProductAPI,
    getAllRawProducts as getAllRawProductsAPI,
    deleteRawProduct as deleteRawProductAPI,
    updateRawProduct as updateRawProductAPI,
    getAllManufactures as getAllManufacturesAPI,
    getAllFilterValues as getAllFilterValuesAPI,
    //getRawProduct as getRawProductAPI
} from '../api';

import {
    SET_PENDING,
    GET_RAW_PRODUCTS,
    ADD_RAW_PRODUCT,
    UPDATE_RAW_PRODUCT,
    GET_MANUFACTURES,
    GET_FILTER_VALUES,
    DELETE_RAW_PRODUCT
} from './const';

export default (dispatch) => {
    const _setPending = useCallback(pending => {
        dispatch({
            type: SET_PENDING,
            pending
        });
    }, [dispatch]);

    const _deleteRawProduct = useCallback(({ ids }) => {
        dispatch({
            type: DELETE_RAW_PRODUCT,
            rawProductsIds: ids
        });
    }, [dispatch]);

    const _getRawProducts = useCallback(rawProducts => {
        dispatch({
            type: GET_RAW_PRODUCTS,
            rawProducts
        });
    }, [dispatch]);

    const _getManufactures = useCallback(manufactures => {
        dispatch({
            type: GET_MANUFACTURES,
            manufactures
        });
    }, [dispatch]);

    const _getFilterValues = useCallback(filterValues => {
        dispatch({
            type: GET_FILTER_VALUES,
            filterValues
        });
    }, [dispatch]);

    const _addRawProduct = useCallback(rawProduct => {
        dispatch({
            type: ADD_RAW_PRODUCT,
            rawProduct
        });
    }, [dispatch]);

    const _updateRawProduct = useCallback(rawProduct => {
        dispatch({
            type: UPDATE_RAW_PRODUCT,
            rawProduct
        });
    }, [dispatch]);

    const getAllRawProducts = useCallback(() => {
        _setPending(true);

        return getAllRawProductsAPI()
            .then(({ data }) => {
                _getRawProducts(data);

                return data;
            })
            .finally(() => _setPending(false));
    }, [_setPending, _getRawProducts]);

    const getAllManufactures = useCallback(() => {
        _setPending(true);

        return getAllManufacturesAPI()
            .then(({ data }) => {
                _getManufactures(data);

                return data;
            })
            .finally(() => _setPending(false));
    }, [_setPending, _getManufactures]);

    const getAllFilterValues = useCallback(() => {
        _setPending(true);

        return getAllFilterValuesAPI()
            .then(({ data }) => {
                _getFilterValues(data);

                return data;
            })
            .finally(() => _setPending(false));
    }, [_setPending, _getFilterValues]);

    const addRawProduct = useCallback(data => {
        _setPending(true);

        return addRawProductAPI(data)
            .then(({ data }) => {
                _addRawProduct([data]);

                return data;
            })
            .catch(e => console.log(e))
            .finally(() => _setPending(false));
    }, [_setPending, _addRawProduct]);

    const deleteRawProduct = useCallback(data => {
        _setPending(true);

        return deleteRawProductAPI(data)
            .then(() => _deleteRawProduct(data))
            .catch(e => console.log(e))
            .finally(() => _setPending(false));
    }, [_setPending, _deleteRawProduct]);

    const updateRawProduct = useCallback(data => {
        _setPending(true);

        return updateRawProductAPI(data)
            .then(() => _updateRawProduct(data))
            .catch(e => console.log(e))
            .finally(() => _setPending(false));
    }, [_setPending, _updateRawProduct]);

    return {
        getAllRawProducts,
        addRawProduct,
        getAllManufactures,
        deleteRawProduct,
        getAllFilterValues,
        updateRawProduct
    };
};
