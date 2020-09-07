import { getUniqueKey } from '../../../utils';

export const parseSupplyAddObjectKey = (obj, name) => {
    for (const key in obj) {
        if (key.includes(name)) return key;
    }

    return '';
};

export const getBlankSupplyItem = () => {
    const key = getUniqueKey();

    return {
        [`rowProductName__${key}`]: null,
        [`quantity__${key}`]: null,
        [`pricePerItem__${key}`]: null,
        id: key
    };
};
