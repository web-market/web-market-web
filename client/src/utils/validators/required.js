import { isNull } from '../isNull';

export const required = (value) => {
	if (isNull(value)) return false;

	return value.toString().trim().length !== 0;
};
