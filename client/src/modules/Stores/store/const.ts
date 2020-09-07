import { createContext } from 'react';
import { StoreContextPropsType } from './types';

const SET_PENDING = 'SET_PENDING';
const SET_STORES = 'SET_STORES';
const DELETE_STORES = 'DELETE_STORES';

export {
	SET_PENDING,
    SET_STORES,
    DELETE_STORES
};

export const initialState = {
    stores: [],
    getStores: () => Promise.resolve(),
    addStore: () => Promise.resolve(),
    deleteStore: () => Promise.resolve(),
};

export const StoreContext = createContext<StoreContextPropsType>(initialState);
