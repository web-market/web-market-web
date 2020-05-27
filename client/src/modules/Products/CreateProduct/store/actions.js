import {
	createProduct as createProductAPI,
	// addManufacture as addManufactureAPI,
	// updateManufacture as updateManufactureAPI,
	// deleteManufacture as deleteManufactureAPI,
	// getManufacture as getManufactureAPI
} from '../api';

import {
	SET_PENDING,
} from './consts';

export default (dispatch) => {
	const _setPending = (pending) => {
		dispatch({
			type: SET_PENDING,
			pending
		});
	};

	const createProduct = (data) => {
		return createProductAPI(data);
	};

	return {
		createProduct
	};
};
