export type Store = {
    id: number,
    name: string
};

export type Stores = Store[];

export type StoreContextPropsType = {
    stores: Stores,
    getStores: () => Promise<any>,
    deleteStore: (data: { ids: string[] | number[] }) => Promise<any>,
    addStore: (data: {}) => Promise<any>
};
