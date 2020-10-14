import { useCallback, useContext, useMemo } from 'react';
import { MediaProductModalsContext, MODALS } from '../MediaProductModalsProvider/const';
import { MediaProductContext } from '../../store/consts';

export const useGetMediaModuleHandlers = () => {
    const { openModal } = useContext(MediaProductModalsContext);
    const {
        categories,
        activeCategoryId,
        setActiveCategory,
        getMediaCategories,
        deleteMediaCategory,
        getMediaCategoryDetail,
        deleteMediaFiles,
        selectedImageIds,
        getMediaFilesInCategory
    } = useContext(MediaProductContext);

    const selectedCategory = useMemo(() => {
        return categories.find(item => item.id === activeCategoryId);
    }, [activeCategoryId, categories]);

    const useDeleteMediaCategory = useCallback((id) => {
        return deleteMediaCategory(id)
            .then(() => {
                return getMediaCategories();
            })
            .then((data) => {
                if (data.length !== 0) {
                    setActiveCategory(data[0].id);
                }
            });
    }, [deleteMediaCategory, getMediaCategories, setActiveCategory]);

    const useAddSubCategory = useCallback((id) => {
        openModal(
            MODALS.MEDIA_CATEGORY_MODAL,
            {
                categoryId: id,
                isSubCategory: true,
                categoryName: selectedCategory.name
            }
        );
    }, [openModal, selectedCategory]);

    const useEditCategory = useCallback((id) => {
        return getMediaCategoryDetail(id)
            .then(({ data }) => {
                openModal(
                    MODALS.MEDIA_CATEGORY_MODAL,
                    {
                        categoryId: id,
                        isEditMode: true,
                        initialValues: data,
                        categoryName: selectedCategory.name
                    }
                );
            })
            .catch(error => console.log(error));
    }, [openModal, getMediaCategoryDetail, selectedCategory]);

    const useDeleteMediaFiles = useCallback(() => {
        return deleteMediaFiles(selectedImageIds)
            .then(() => getMediaFilesInCategory(activeCategoryId))
            .catch(error => console.log(error));
    }, [deleteMediaFiles, selectedImageIds, getMediaFilesInCategory, activeCategoryId]);


    return {
        useDeleteMediaCategory,
        useEditCategory,
        useAddSubCategory,
        useDeleteMediaFiles
    };
};
