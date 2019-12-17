import { isNull } from '../isNull';
import { isNumber } from '../isNumber';

export const required = (value) => {
	//TODO refactor this shit
	if (isNumber(value) && !isNull(value)) return true;

	return isNull(value) ? false : value.trim().length !== 0;
};
