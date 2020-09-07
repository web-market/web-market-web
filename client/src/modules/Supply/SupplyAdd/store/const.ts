import { createContext } from 'react';
import { StoreAddContextPropsType } from '../types';
import { getUniqueKey } from '../../../../utils';

const key = getUniqueKey();

export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM_FROM_LIST = 'REMOVE_ITEM_FROM_LIST';

export const initialState = {
    itemsToAdd: [
        {
            [`rowProductName__${key}`]: null,
            [`quantity__${key}`]: null,
            [`pricePerItem__${key}`]: null,
            id: key
        }
    ],
    addItem: (itemToAdd: {}) => {},
    removeItem: (itemIndex: number) => {},
    updateItem: (value: string | number | null, itemIndex: number, fieldName: string) => {}
};

export const SupplyAddContext = createContext<StoreAddContextPropsType>(initialState);
