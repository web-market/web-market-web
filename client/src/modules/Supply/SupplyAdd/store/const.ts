import { createContext } from 'react';
import { StoreAddContextPropsType } from '../types';
import { getUniqueKey } from '../../../../utils';
import { supplyListMatrixItemsName } from '../components/SupplyAddList/supplyListMatrix';

const key = getUniqueKey();

export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM_FROM_LIST = 'REMOVE_ITEM_FROM_LIST';

export const initialState = {
    itemsToAdd: [
        {
            [`${supplyListMatrixItemsName.rawProduct}__${key}`]: null,
            [`${supplyListMatrixItemsName.rawProductQuantity}__${key}`]: null,
            [`${supplyListMatrixItemsName.pricePerItem}__${key}`]: null,
            id: key
        }
    ],
    addItem: (itemToAdd: {}) => {},
    removeItem: (itemIndex: number) => {},
    updateItem: (value: string | number | null, itemIndex: number, fieldName: string) => {}
};

export const SupplyAddContext = createContext<StoreAddContextPropsType>(initialState);
