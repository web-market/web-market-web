import { createContext } from 'react';
import { RawProductContextPropsType } from './types';

const SET_PENDING = 'SET_PENDING';
const GET_RAW_PRODUCTS = 'GET_RAW_PRODUCTS';
const ADD_RAW_PRODUCT = 'ADD_RAW_PRODUCT';
const DELETE_RAW_PRODUCT = 'DELETE_RAW_PRODUCT';
const UPDATE_RAW_PRODUCT = 'UPDATE_RAW_PRODUCT';
const GET_MANUFACTURES = 'GET_MANUFACTURES';
const GET_FILTER_VALUES = 'GET_FILTER_VALUES';

export {
	SET_PENDING,
    GET_RAW_PRODUCTS,
    GET_FILTER_VALUES,
    UPDATE_RAW_PRODUCT,
    //GET_RAW_PRODUCT,
    DELETE_RAW_PRODUCT,
    GET_MANUFACTURES,
    ADD_RAW_PRODUCT
};

export const initialState = {
    pending: true,
    rawProducts: [],
    manufactures: [],
    filterValues: [],
    addStore: () => Promise.resolve(),
    getAllRawProducts: () => Promise.resolve(),
    getAllManufactures: () => Promise.resolve(),
    getAllFilterValues: () => Promise.resolve(),
    addRawProduct: () => Promise.resolve(),
    deleteRawProduct: () => Promise.resolve(),
    updateRawProduct: () => Promise.resolve(),
};

export const RawProductContext = createContext<RawProductContextPropsType>(initialState);
