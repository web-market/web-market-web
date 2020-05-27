import { actionLogger } from '../../../utils';
import {
	SET_LIST_NAME,
	SET_LIST_INITIALS,
	UPDATE_LIST_ITEM_STATE
} from './consts';

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload);

	switch (payload.type) {
		case SET_LIST_INITIALS:
			return {
				...state,
				listState: payload.initialState.state
			};
		case SET_LIST_NAME:
			return {
				...state,
				listName: payload.initialState.listName
			};
		case UPDATE_LIST_ITEM_STATE:
			return {
				...state,
				listState: {
					...state.listState,
					[payload.itemState.itemName]: payload.itemState.itemState
				}
			};
		default:
			throw new Error();
	}
};
