import { createContext } from 'react';
import { initialState } from './reducer';

export const AppGlobalContext = createContext(initialState);

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
