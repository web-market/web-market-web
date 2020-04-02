import {
	getManufactures as getManufacturesAPI,
	addManufacture as addManufactureAPI,
	updateManufacture as updateManufactureAPI,
	deleteManufacture as deleteManufactureAPI,
	getManufacture as getManufactureAPI
} from '../api';

import {
	SET_MANUFACTURES,
	SET_PENDING,
} from './consts';

export default (dispatch) => {
	const _setPending = (pending) => {
		dispatch({
			type: SET_PENDING,
			pending
		});
	};

	const _setManufactures = (manufactures) => {
		dispatch({
			type: SET_MANUFACTURES,
			manufactures
		});
	};

	const getManufactures = () => {
		_setPending(true);

		return getManufacturesAPI()
			.then(({ data }) => {
				_setManufactures(data);
				_setPending(false);
			})
			.catch(() => _setPending(false));
	};

	const addManufacture = (data) => {
		return addManufactureAPI(data);
	};

	const updateManufacture = (data) => {
		return updateManufactureAPI(data);
	};

	const deleteManufacture = (data) => {
		return deleteManufactureAPI(data);
	};

	const getManufacture = (data) => {
		return getManufactureAPI(data);
	};

	return {
		getManufacture,
		addManufacture,
		getManufactures,
		updateManufacture,
		deleteManufacture
	};
};
