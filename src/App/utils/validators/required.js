import { isNull } from '../isNull';

export const required = (value) => {
	return isNull(value) ? false : value.length !== 0;
};
