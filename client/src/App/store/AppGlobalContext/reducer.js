import { actionLogger, getUniqueId, removeArrayElementById, removeObjectProperty } from '../../../utils';

import {
	SHOW_NOTIFICATION,
	REMOVE_NOTIFICATION,
	ADD_UPLOADER_TO_GLOBAL_CONTEXT,
	REMOVE_UPLOADER_FROM_GLOBAL_CONTEXT
} from './consts';

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload);

	switch (payload.type) {
		case SHOW_NOTIFICATION:
			const notification = {
				id: getUniqueId(),
				...payload.notification
			};

			return {
				...state,
				notifications: [notification, ...state.notifications]
			};
		case REMOVE_NOTIFICATION:
			return {
				...state,
				notifications: removeArrayElementById(state.notifications, payload.notificationId)
			};
		case ADD_UPLOADER_TO_GLOBAL_CONTEXT:
			return {
				...state,
				upLoaders: { ...state.upLoaders, ...payload.upLoader }
			};
		case REMOVE_UPLOADER_FROM_GLOBAL_CONTEXT:
			return {
				...state,
				upLoaders: removeObjectProperty(state.upLoaders, payload.upLoader)
			};
		default:
			throw new Error();
	}
};
