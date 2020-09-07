import React, { useContext } from 'react';

import { AdminControlContentBox } from '../../../../components/AdminControlContentBox/AdminControlContentBox';
import { useGetStores } from '../../hooks';
import { EmptyContainer } from '../../../../baseComponents/EmptyContainer/EmptyContainer';
import { Button } from '../../../../baseComponents/Button/Button';
import { MarginBox } from '../../../../baseComponents/MarginBox/MarginBox';
import { Typography } from '../../../../baseComponents/Typography/Typography';
import { StoreModalsContext, MODALS } from '../StoreModalsContextProvider/const';
import { StoreContext } from '../../store/const';
import { StoreList } from '../StoreList/StoreList';

const StoreContent = () => {
    useGetStores();
    const { openModal } = useContext(StoreModalsContext);
    const { stores } = useContext(StoreContext);

    return (
        <AdminControlContentBox>
            {
                stores.length !== 0 && (
                    <StoreList
                        stores={stores}
                    />
                )
            }
            {
                stores.length === 0 && (
                    <EmptyContainer
                        hasCenteredContent
                        hasVerticalContent
                    >
                        <MarginBox bSmall>
                            <Typography
                                variant="20"
                            >
                                !!нет ни одного добавленного склада
                            </Typography>
                        </MarginBox>
                        <MarginBox bSmall>
                            <Button
                                label="!!Добавить склад"
                                type="primary"
                                actionHandler={() => openModal(MODALS.ADD_STORE_MODAL)}
                            />
                        </MarginBox>
                    </EmptyContainer>
                )
            }
        </AdminControlContentBox>
    );
};

export { StoreContent };
