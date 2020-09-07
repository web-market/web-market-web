export const supplyListMatrixItemsName = {
    rowProductName: 'rowProductName',
    quantity: 'quantity',
    pricePerItem: 'pricePerItem',
    priceTotalPerItem: 'priceTotalPerItem',
    plusIcon: 'plusIcon',
    equalIcon: 'equalIcon',
};

export const supplyListMatrix = [
    {
        label: '!!наименование',
        width: '30%',
        show: true,
        itemName: supplyListMatrixItemsName.rowProductName,
        displayInTooltip: false
    },
    {
        label: '!!количество',
        width: '12%',
        show: true,
        itemName: supplyListMatrixItemsName.quantity,
        displayInTooltip: true
    },
    {
        label: '',
        width: '3%',
        show: true,
        itemName: supplyListMatrixItemsName.plusIcon,
        displayInTooltip: true
    },
    {
        label: '!!цена за единицу',
        width: '12%',
        show: true,
        itemName: supplyListMatrixItemsName.pricePerItem,
        displayInTooltip: true
    },
    {
        label: '',
        width: '3%',
        show: true,
        itemName: supplyListMatrixItemsName.equalIcon,
        displayInTooltip: true
    },
    {
        label: '!!итого',
        width: 'auto',
        show: true,
        itemName: supplyListMatrixItemsName.priceTotalPerItem,
        displayInTooltip: true
    },
];
