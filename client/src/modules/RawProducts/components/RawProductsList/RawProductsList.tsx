import React, { useContext, useEffect, useMemo, useCallback } from 'react';
import {
    AdminControlContentBox
} from '../../../../components/AdminControlContentBox/AdminControlContentBox';
import { RawProductContext } from '../../store/const';
import { Typography } from '../../../../baseComponents/Typography/Typography';
import { EmptyContainer } from '../../../../baseComponents/EmptyContainer/EmptyContainer';
import { RawProductsListItem } from './RawProductsListItem';
import { pencil, trash } from '../../../../icons';
import { getArrayElementByKey, getUniqueKey } from '../../../../utils';
import { MODALS, RawProductsModalsContext } from '../RawProductsModalsContextProvider/const';
import { AppGlobalContext } from '../../../../App/store/AppGlobalContext';

const RawProductsList = () => {
    const {
        getAllRawProducts,
        rawProducts,
        getAllManufactures,
        deleteRawProduct
    } = useContext(RawProductContext);
    const { openModal } = useContext(RawProductsModalsContext);
    const { showNotification } = useContext(AppGlobalContext);

    useEffect(() => {
        getAllRawProducts();
        getAllManufactures();
    }, [getAllRawProducts, getAllManufactures]);

    const handleRawProductClick = id => {
        openModal(
            MODALS.DETAIL_RAW_PRODUCTS_MODAL,
            { id }
        );
    };

    const handleRawProductDelete = useCallback(id => {
        const currentItem = getArrayElementByKey(rawProducts, id);

        openModal(
            MODALS.DELETE_RAW_PRODUCTS_MODAL,
            {
                modalTitle: '!!Удалить типовый товар',
                handleSubmit: () => deleteRawProduct({ ids: [id] }),
                rightButtonLabel: '!!Удалить',
                onSuccess: () => showNotification({
                                    message: `!!Типовый продукт "${currentItem.name}" !!удален`
                                }),
                content: (
                    <span>!!Вы уверены, что хотите удлаить: <strong>{currentItem.name}</strong>?</span>
                )
            }
        );
    }, [deleteRawProduct, openModal, rawProducts]);

    const handleRawProductEdit = useCallback(id => {
        openModal(
            MODALS.EDIT_RAW_PRODUCTS_MODAL,
            { id }
        );
    }, [openModal]);

    const actions = useMemo(() => {
        return [
            [
                {
                    name: '!!Редактировать',
                    icon: pencil,
                    action: id => handleRawProductEdit(id)
                },
                {
                    name: '!!Удалить',
                    icon: trash,
                    action: id => handleRawProductDelete(id)
                }
            ]
        ];
    }, [handleRawProductDelete, handleRawProductEdit]);

    return (
        <AdminControlContentBox>
            {
                rawProducts.length !== 0 && rawProducts.map(item => {
                    return (
                        <RawProductsListItem
                            handleItemClick={handleRawProductClick}
                            actions={actions}
                            name={item.name}
                            id={item.id}
                            key={getUniqueKey()}
                        />
                    );
                })
            }
            {
                rawProducts.length === 0 && (
                    <EmptyContainer hasCenteredContent>
                        <Typography displayBlock>!!пока что не добавлено ни одной типового товара</Typography>
                    </EmptyContainer>
                )
            }
        </AdminControlContentBox>
    );
};

export { RawProductsList };
