import { isNullOrUndefined } from './isNullOrUndefined';
import { isNumber } from './isNumber';

export const updateArrayElementByIndex:(
    array: [],
    index: string | number,
    value: string | number,
    key?: string | number
) => void = (array, index, value, key) => {
    const newArray = [...array];

    const normalizeValue = isNumber(value) ? Number(value) : value;

    if (!isNullOrUndefined(key)) {
        if (isNullOrUndefined(newArray[index])) return newArray;

        newArray[index][key] = normalizeValue;
    } else {
        newArray[index] = normalizeValue;
    }

    return newArray;
};
