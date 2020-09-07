//only 0-9,.
const pattern = /[^\d,.]+/g;

export const onlyNumbers = (value) => {
    value = value.replace(pattern, '').replace(',', '.');

    if (Number(value[0]) === 0 && !value.includes('.') && value.length > 2) {
        value = `0.${value.substring(1)}`;
    }

    if (value.length === 2 && Number(value[0]) === 0 && value[1] !== '.') {
        value = `0.${value[1]}`;
    }

    return value;
};
