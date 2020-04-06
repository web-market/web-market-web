import { actionLogger } from '../../../utils';
import {
	SET_NAVIGATION_COLLAPSED
} from './consts';

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload);

	switch (payload.type) {
		case SET_NAVIGATION_COLLAPSED:
			return {
				...state,
				isCollapsed: payload.isCollapsed
			};
		default:
			throw new Error();
	}
};
