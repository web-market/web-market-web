import { actionLogger } from '../../../../utils';

import {
	SET_PENDING
} from './consts';

export const initialState = {
	manufactures: [],
	isPending: false
};

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload, SET_PENDING);

	switch (payload.type) {
		case SET_PENDING:
			return {
				...state,
				isPending: payload.pending
			};
		default:
			throw new Error();
	}
};
