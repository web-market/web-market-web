import React from 'react';
import { getUniqueKey } from '../../../../utils';
import { ListRow, ListRowItem } from '../../../../baseComponents/List';
import { storeListMatrix, storeListMatrixItemsName } from './storeListMatrix';
import { Button } from '../../../../baseComponents/Button/Button';
import { trash } from '../../../../icons';
import classes from './styles/index.scss';
import { useDeleteStore } from '../../hooks';
import { useHistory } from 'react-router-dom';
import { URL } from '../../../../components/consts';

const StoreListBody = (
    {
        stores
    }
) => {
    const { push } = useHistory();
    const { deleteStore } = useDeleteStore();

    const getRowItems = store => {
        const rowItems = [];

        storeListMatrix.forEach(item => {
            if (storeListMatrixItemsName.storeId === item.itemName) {
                rowItems.push(
                    <ListRowItem
                        key={getUniqueKey()}
                        width={item.width}
                    >
                        {store.id}
                    </ListRowItem>
                );
            }

            if (storeListMatrixItemsName.storeName === item.itemName) {
                rowItems.push(
                    <ListRowItem
                        key={getUniqueKey()}
                        width={item.width}
                    >
                        {store.name}
                    </ListRowItem>
                );
            }
        });

        return rowItems;
    };

    return (
        <>
            {
                stores.map(store => {
                    return (
                        <ListRow
                            key={getUniqueKey()}
                            className={classes.storeListBody__row}
                            onClick={() => push(`${URL.STORE_DETAIL.DETAIL}/${store.id}`)}
                        >
                            {getRowItems(store)}
                            <Button
                                size="tiny"
                                icon={trash}
                                type="danger"
                                transparent
                                className={classes.storeListBody__deleteButton}
                                actionHandler={(e) => deleteStore(e, store)}
                            />
                        </ListRow>
                    );
                })
            }
        </>
    );
};

export { StoreListBody };
