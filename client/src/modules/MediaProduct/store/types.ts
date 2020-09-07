type _idType = number | string

type categoryType = {
    id: number;
    name: string;
};

export type MediaProductContextPropsType = {
    selectedImageIds: number[] | string[];
    activeCategoryId: null,
    activeCategoryName: null;
    mediaProductGrisLayout: boolean;
    categories: categoryType[];
    pending: boolean;
    images: number[] | string[];
    addMediaCategory: (values: { name: string }) => Promise<any>;
    setActiveCategory: (id: _idType) => void;
    setSelectedImageId: (id: _idType) => void;
    getMediaCategories: () => Promise<any>;
    editMediaCategory: (values: { id: _idType }) => Promise<any>;
    deleteMediaCategory: (id: _idType) => Promise<any>;
    deleteSelectedImageId: (id: _idType) => void;
    setMediaProductLayout: (gridType: string | boolean) => void;
    getMediaCategoryDetail: (id: _idType) => Promise<any>;
}
