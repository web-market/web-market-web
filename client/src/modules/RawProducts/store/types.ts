export type RawProduct = {
    id: number;
    name: string;
    description: string;
    manufacturerId: string | number;
};

export type Manufacture = {
    id: number;
    name: string;
    description: string;
};

type RawProducts = RawProduct[];

export type Manufactures = Manufacture[];

export type RawProductContextPropsType = {
    pending: boolean;
    rawProducts: RawProducts;
    manufactures: Manufactures;
    addStore: (data: {}) => Promise<any>;
    getAllRawProducts: () => Promise<any>;
    getAllManufactures: () => Promise<any>;
    addRawProduct: (data: {}) => Promise<any>;
    deleteRawProduct: (data: { ids: string[] | number[]}) => Promise<any>;
    updateRawProduct: (data: {}) => Promise<any>;
};
