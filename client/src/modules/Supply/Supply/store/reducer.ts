import { actionLogger, removeArrayElementById } from '../../../../utils';

import {
	SET_PENDING,
    SET_SUPPLY,
    DELETE_SUPPLY,
} from './const';

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload, SET_PENDING);

	switch (payload.type) {
        case SET_PENDING:
            return {
                ...state,
                pending: payload.pending
            };
		case SET_SUPPLY:
			return {
				...state,
                supplies: [...state.supplies, ...payload.supplies]
			};
        case DELETE_SUPPLY:
            let newItems = state.supplies;

            payload.suppliesIds.forEach(id => {
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
