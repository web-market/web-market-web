export const getArrayElementByKey = (
    array: {}[], keyValue: string | number | boolean, key: string = 'id'
): { [key: string]: string; } => {
    return array.find(item => item[key] === keyValue);
};
