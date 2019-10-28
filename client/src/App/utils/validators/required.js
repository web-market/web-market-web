import { isNull } from '../isNull';

export const required = (value) => {
	return isNull(value) ? false : value.trim().length !== 0;
};
