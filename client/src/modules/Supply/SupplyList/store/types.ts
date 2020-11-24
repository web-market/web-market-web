export type Supply = {
    id: number,
    identificationNumber: string,
    arrivalDate: string,
    provider: {
        id: number,
        name: string
    },
    store: {
        id: number,
        name: string
    },
    comment: string
};

export type Supplies = Supply[];

export type StoreContextPropsType = {
    supplies: Supplies,
    getSupplies: () => Promise<any>,
    deleteSupply: (ids: []) => Promise<any>,
    getSupply: (data: {}) => Promise<any>
};
