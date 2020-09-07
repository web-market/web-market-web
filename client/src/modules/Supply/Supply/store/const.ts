import { createContext } from 'react';
import { StoreContextPropsType } from './types';

const SET_PENDING = 'SET_PENDING';
const SET_SUPPLY = 'SET_SUPPLY';
const DELETE_SUPPLY = 'DELETE_SUPPLY';

export {
	SET_PENDING,
    SET_SUPPLY,
    DELETE_SUPPLY
};

export const initialState = {
    supplies: [],
    getSupplies: () => Promise.resolve(),
    deleteSupply: () => Promise.resolve(),
    addSupply: () => Promise.resolve(),
};

export const SupplyContext = createContext<StoreContextPropsType>(initialState);
