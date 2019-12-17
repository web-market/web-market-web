import { isNull } from '../isNull';
import { isNumber } from '../isNumber';

export const required = (value) => {
	if (isNumber(value)) return true;

	return isNull(value) ? false : value.trim().length !== 0;
};
