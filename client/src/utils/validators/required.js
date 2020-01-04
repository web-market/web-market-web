import { isNull } from '../isNull';

export const required = (value) => {
	if (isNull(value)) {
		return {
			isValid: false,
			errorMessage: '!Не должно быть пусты'
		};
	}

	return {
		isValid: value.toString().trim().length !== 0,
		errorMessage: '!Не должно быть пусты'
	};
};
