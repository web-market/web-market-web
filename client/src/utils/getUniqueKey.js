import { uuidv4 } from './uuidv4';

export const getUniqueKey = (prefix, index = '') => {
	if (prefix) {
		return `${prefix}-${index}`;
	}

	return uuidv4();
};
