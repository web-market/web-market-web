import { createContext } from 'react';
import { RawProductContextPropsType } from './types';

const SET_PENDING = 'SET_PENDING';
const GET_MODELS = 'GET_MODELS';
const ADD_MODEL = 'ADD_MODEL';
const DELETE_MODEL = 'DELETE_MODEL';
const UPDATE_MODEL = 'UPDATE_MODEL';
const GET_MANUFACTURES = 'GET_MANUFACTURES';
const GET_FILTER_VALUES = 'GET_FILTER_VALUES';

export {
	SET_PENDING,
    GET_MODELS,
    GET_FILTER_VALUES,
    UPDATE_MODEL,
    //GET_MODEL,
    DELETE_MODEL,
    GET_MANUFACTURES,
    ADD_MODEL
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
