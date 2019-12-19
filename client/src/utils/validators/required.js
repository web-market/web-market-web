import { isNull } from '../isNull';

export const required = (value) => {
	return isNull(value.toString()) ? false : value.trim().length !== 0;
};
