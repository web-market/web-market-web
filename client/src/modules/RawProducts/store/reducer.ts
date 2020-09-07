import {actionLogger, removeArrayElementById, updateArrayElementById} from '../../../utils';

import {
	SET_PENDING,
    GET_RAW_PRODUCTS,
    ADD_RAW_PRODUCT,
    UPDATE_RAW_PRODUCT,
    DELETE_RAW_PRODUCT,
    GET_MANUFACTURES
} from './const';

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload, SET_PENDING);

	switch (payload.type) {
        case SET_PENDING:
            return {
                ...state,
                pending: payload.pending
            };
		case GET_RAW_PRODUCTS:
			return {
				...state,
                rawProducts: [...state.rawProducts, ...payload.rawProducts]
			};
        case GET_MANUFACTURES:
            return {
                ...state,
                manufactures: [...state.manufactures, ...payload.manufactures]
            };
        case ADD_RAW_PRODUCT:
            return {
                ...state,
                rawProducts: [...state.rawProducts, ...payload.rawProduct]
            };
        case UPDATE_RAW_PRODUCT:
            const updateRawProducts = updateArrayElementById(state.rawProducts, payload.rawProduct.id, payload.rawProduct);

            return {
                ...state,
                rawProducts: updateRawProducts
            };
        case DELETE_RAW_PRODUCT:
            let newItems = state.rawProducts;

            payload.rawProductsIds.forEach(id => {
                newItems = removeArrayElementById(newItems, id);
            });

            return {
                ...state,
                rawProducts: newItems
            };
		default:
			throw new Error();
	}
};
