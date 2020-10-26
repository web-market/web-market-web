export type RawProductProps = {
    id: number;
    name: string;
    description: string;
    manufacturerId: string | number;
};

export type FilterValueProps = {
    id: number;
    name?: string;
    value?: string;
};

export type ManufactureProps = {
    id: number;
    name: string;
    description: string;
};

type RawProductsProps = RawProductProps[];
export type FilterValuesProps = FilterValueProps[];

export type Manufactures = ManufactureProps[];

export type RawProductContextPropsType = {
    pending: boolean;
    rawProducts: RawProductsProps;
    filterValues: FilterValuesProps;
    manufactures: Manufactures;
    addStore: (data: {}) => Promise<any>;
    getAllRawProducts: () => Promise<any>;
    getAllManufactures: () => Promise<any>;
    getAllFilterValues: () => Promise<any>;
    addRawProduct: (data: {}) => Promise<any>;
    deleteRawProduct: (data: { ids: string[] | number[]}) => Promise<any>;
    updateRawProduct: (data: {}) => Promise<any>;
};
