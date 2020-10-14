type _idType = number | string
type _selectedImageIdsType = _idType[]

type categoryType = {
    id: number;
    name: string;
};

type mediaFileType = {
    id: number;
    createdAtDate: string;
    files: {
        format: string;
        id: number;
        name: string;
        path: string;
        size: string;
    }[]
};

export type MediaProductContextPropsType = {
    selectedImageIds: _selectedImageIdsType;
    activeCategoryId: null,
    activeCategoryName: null;
    mediaProductGrisLayout: boolean;
    categories: categoryType[];
    mediaFiles: mediaFileType[];
    pending: boolean;
    images: number[] | string[];
    addMediaCategory: (values: { name: string }) => Promise<any>;
    getMediaFilesInCategory: (id: number) => Promise<any>;
    setActiveCategory: (id: _idType) => void;
    setSelectedImageId: (id: _idType) => void;
    getMediaCategories: () => Promise<any>;
    editMediaCategory: (values: { id: _idType }) => Promise<any>;
    deleteMediaCategory: (id: _idType) => Promise<any>;
    deleteMediaFiles: (ids: _selectedImageIdsType) => Promise<any>;
    deleteSelectedImageId: (id: _idType) => void;
    setMediaProductLayout: (gridType: string | boolean) => void;
    getMediaCategoryDetail: (id: _idType) => Promise<any>;
}
