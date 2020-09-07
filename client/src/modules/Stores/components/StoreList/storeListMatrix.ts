export const storeListMatrixItemsName = {
    storeId: 'storeId',
    storeName: 'storeName'
};

export const storeListMatrix = [
    {
        label: '!!Номер',
        width: 100,
        show: true,
        itemName: storeListMatrixItemsName.storeId,
        displayInTooltip: false
    },
    {
        label: '!!Название',
        width: 500,
        show: true,
        itemName: storeListMatrixItemsName.storeName,
        displayInTooltip: true
    },
];
