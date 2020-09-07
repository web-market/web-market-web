const pattern = /[^\d]+/g;

export const onlyInteger = (value) => {
    if (Number(value[0]) === 0) {
        value = '';
    }

    value = value.replace(pattern, '');

    return value;
};
