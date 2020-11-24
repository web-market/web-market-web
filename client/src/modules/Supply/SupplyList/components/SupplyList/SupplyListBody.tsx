import React from 'react';
import { getUniqueKey } from '../../../../../utils';
import { ListRow, ListRowItem } from '../../../../../baseComponents/List';
import { supplyListMatrix, supplyListMatrixItemsName } from './supplyListMatrix';
import { Button } from '../../../../../baseComponents/Button/Button';
import { trash } from '../../../../../icons';
import classes from './styles/index.scss';
import { useHistory } from 'react-router-dom';
import { URL } from '../../../../../components/consts';

const SupplyListBody = (
    {
        supplies
    }
) => {
    const { push } = useHistory();

    const getRowItems = supply => {
        const rowItems = [];

        supplyListMatrix.forEach(item => {
            if (supplyListMatrixItemsName.supplyId === item.itemName) {
                rowItems.push(
                    <ListRowItem
                        key={getUniqueKey()}
                        width={item.width}
                    >
                        {supply.identificationNumber}
                    </ListRowItem>
                );
            }
            if (supplyListMatrixItemsName.supplyComment === item.itemName) {
                rowItems.push(
                    <ListRowItem
                        key={getUniqueKey()}
                        width={item.width}
                    >
                        {supply.comment}
                    </ListRowItem>
                );
            }
            if (supplyListMatrixItemsName.supplyArrivalDate === item.itemName) {
                rowItems.push(
                    <ListRowItem
                        key={getUniqueKey()}
                        width={item.width}
                    >
                        {supply.arrivalDate}
                    </ListRowItem>
                );
            }
        });

        return rowItems;
    };

    return (
        <>
            {
                supplies.map(supply => {
                    return (
                        <ListRow
                            pointer
                            key={getUniqueKey()}
                            className={classes.supplyListBody__row}
                            onClick={() => push(`${URL.SUPPLY.SUPPLY_DETAIL}/${supply.id}`)}
                        >
                            {getRowItems(supply)}
                            <Button
                                size="tiny"
                                icon={trash}
                                type="danger"
                                transparent
                                className={classes.supplyListBody__deleteButton}
                            />
                        </ListRow>
                    );
                })
            }
        </>
    );
};

export { SupplyListBody };
