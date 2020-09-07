import { actionLogger, removeArrayElementByIndex, updateArrayElementByIndex } from '../../../../utils';

import {
	ADD_ITEM_TO_LIST,
    REMOVE_ITEM_FROM_LIST,
    UPDATE_ITEM
} from './const';

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload);

	switch (payload.type) {
		case ADD_ITEM_TO_LIST:
			return {
				...state,
                itemsToAdd: [...state.itemsToAdd, payload.itemToAdd]
			};
        case REMOVE_ITEM_FROM_LIST:
            return {
                ...state,
                itemsToAdd: removeArrayElementByIndex(state.itemsToAdd, payload.itemIndex)
            };
        case UPDATE_ITEM:
            const { value, itemIndex, fieldName } = payload;

            return {
                ...state,
                itemsToAdd: updateArrayElementByIndex(state.itemsToAdd, itemIndex, value, fieldName)
            };
		default:
			throw new Error();
	}
};
