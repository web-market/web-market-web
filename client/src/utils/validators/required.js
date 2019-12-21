import { isNull } from '../isNull';

export const required = (value) => {
	if (value === null) return false;

	return isNull(value.toString()) ? false : value.trim().length !== 0;
};
