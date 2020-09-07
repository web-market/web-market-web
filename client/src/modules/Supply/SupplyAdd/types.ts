export type itemToAdd = {
    [key: string]: number | string;
    // @ts-ignore
    [key: string]: number | string;
    // @ts-ignore
    [key: string]: number | string;
}

export type StoreAddContextPropsType = {
    itemsToAdd: itemToAdd[];
    addItem: (itemToAdd: itemToAdd) => void;
    removeItem: (itemIndex: number) => void;
    updateItem: (value: string | number | null, itemIndex: number, fieldName: string) => void;
};
