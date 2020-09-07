export type Supply = {
    id: number,
    name: string,
    date: string,
    providerId: number,
    storeId: number,
    comment: string
};

export type Supplies = Supply[];

export type StoreContextPropsType = {
    supplies: Supplies,
    getSupplies: () => Promise<any>,
    deleteSupply: (ids: { }) => Promise<any>,
    addSupply: (data: {}) => Promise<any>
};
