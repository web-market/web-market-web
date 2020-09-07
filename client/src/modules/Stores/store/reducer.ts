import { actionLogger, removeArrayElementById } from '../../../utils';

import {
	SET_PENDING,
	SET_STORES,
    DELETE_STORES,
} from './const';

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload, SET_PENDING);

	switch (payload.type) {
        case SET_PENDING:
            return {
                ...state,
                pending: payload.pending
            };
		case SET_STORES:
			return {
				...state,
                stores: [...state.stores, ...payload.stores]
			};
        case DELETE_STORES:
            let newItems = state.stores;

            payload.storesIds.forEach(id => {
                newItems = removeArrayElementById(newItems, id);
            });

            return {
                ...state,
                stores: newItems
            };
		default:
			throw new Error();
	}
};
