import { uuidv4 } from './uuidv4';

export const getUniqueKey: (value?: string, value2?: string | number) => string = (prefix, index = '') => {
    if (prefix) {
        return `${prefix}-${index}`;
    }

    return uuidv4();
};
