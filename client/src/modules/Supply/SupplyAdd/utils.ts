import { getUniqueKey } from '../../../utils';
import { supplyListMatrixItemsName } from './components/SupplyAddList/supplyListMatrix';

export const parseSupplyAddObjectKey = (obj, name) => {
    for (const key in obj) {
        if (key.includes(name)) return key;
    }

    return '';
};

export const getBlankSupplyItem = () => {
    const key = getUniqueKey();

    return {
        [`${supplyListMatrixItemsName.rawProduct}__${key}`]: null,
        [`${supplyListMatrixItemsName.productQuantity}__${key}`]: null,
        [`${supplyListMatrixItemsName.pricePerItem}__${key}`]: null,
        id: key
    };
};

export const normalizeSupplyData = values => {
    const valuesCopy = { ...values };
    const supplyData = {};

    for (const key in valuesCopy) {

        if (key === 'provider' || key === 'store') {
            supplyData[key] = { id: valuesCopy[key] };
        } else {
            supplyData[key] = valuesCopy[key];
        }
    }

    return supplyData;
};

export const normalizeAddedItems = values => {
    const valuesCopy = { ...values };

    const supplyProductAudit = [];
    const uuidKeys = [];

    for (const key in valuesCopy) {
        const [name, id] = key.split('__');
        if (!uuidKeys.includes(id)) {
            uuidKeys.push(id);
        }
    }

    uuidKeys.forEach(uuidKey => {
        const item = {};
        for (const key in valuesCopy) {
            const [name, id] = key.split('__');

            if (id === uuidKey) {
                if (name === supplyListMatrixItemsName.rawProduct) {
                    item[name] = { id: valuesCopy[key] };
                } else {
                    item[name] = valuesCopy[key];
                }
            }
        }

        supplyProductAudit.push(item);
    });

    return supplyProductAudit;
};
