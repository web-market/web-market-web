export const supplyListMatrixItemsName = {
    supplyId: 'supplyId',
    supplyComment: 'supplyComment',
    supplyArrivalDate: 'supplyArrivalDate'
};

export const supplyListMatrix = [
    {
        label: '!!Номер',
        width: 100,
        show: true,
        itemName: supplyListMatrixItemsName.supplyId,
        displayInTooltip: false
    },
    {
        label: '!!Комментарий',
        width: 200,
        show: true,
        itemName: supplyListMatrixItemsName.supplyComment,
        displayInTooltip: true
    },
    {
        label: '!!Дата создания',
        width: 200,
        show: true,
        itemName: supplyListMatrixItemsName.supplyArrivalDate,
        displayInTooltip: true
    },
];
