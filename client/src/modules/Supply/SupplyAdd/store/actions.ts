import { useCallback } from 'react';

import {
    ADD_ITEM_TO_LIST,
    REMOVE_ITEM_FROM_LIST,
    UPDATE_ITEM
} from './const';

export default (dispatch) => {
    const addItem = useCallback(itemToAdd => {
        dispatch({
            type: ADD_ITEM_TO_LIST,
            itemToAdd
        });
    }, [dispatch]);

    const removeItem = useCallback(itemIndex => {
        dispatch({
            type: REMOVE_ITEM_FROM_LIST,
            itemIndex
        });
    }, [dispatch]);

    const updateItem = useCallback((value, itemIndex, fieldName) => {
        dispatch({
            type: UPDATE_ITEM,
            itemIndex,
            value,
            fieldName
        });
    }, [dispatch]);

    return {
        addItem,
        removeItem,
        updateItem
    };
};
