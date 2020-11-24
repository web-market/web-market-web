import React, { useMemo } from 'react';
import { supplyListMatrix, supplyListMatrixItemsName } from './supplyListMatrix';
import { ListRowItem } from '../../../../../baseComponents/List';
import { getUniqueKey, isNumber } from '../../../../../utils';
import { Field } from '../../../../../baseComponents/Form';
import { Dropdown, Textbox } from '../../../../../baseComponents/Form/Adapters';
import { parseSupplyAddObjectKey } from '../../utils';
import { trash, close, equal } from '../../../../../icons';
import { Button } from '../../../../../baseComponents/Button/Button';
import { Icon } from '../../../../../baseComponents/Icon/Icon';
import classes from './styles/index.scss';

const SupplyAddListItem = (
    {
        item: formItem,
        itemIndex,
        removeItem,
        updateItem,
        rawProducts
    }
) => {
    const filedName = useMemo(() => {
        return {
            rowProductName: parseSupplyAddObjectKey(formItem, supplyListMatrixItemsName.rawProduct),
            quantity: parseSupplyAddObjectKey(formItem, supplyListMatrixItemsName.productQuantity),
            pricePerItem: parseSupplyAddObjectKey(formItem, supplyListMatrixItemsName.pricePerItem),
        };
    }, [formItem]);

    const getRowItems = useMemo(() => {
        const rowItems = [];

        supplyListMatrix.forEach(item => {
            if (supplyListMatrixItemsName.rawProduct === item.itemName) {
                rowItems.push(
                    <ListRowItem
                        key={getUniqueKey()}
                        width={item.width}
                    >
                        <Field
                            name={filedName.rowProductName}
                            component={Dropdown}
                            items={rawProducts}
                            initialValue={formItem[filedName.rowProductName]}
                            validate={{
                                required: true
                            }}
                            onItemSelected={value => updateItem(value, itemIndex, filedName.rowProductName)}
                        />
                    </ListRowItem>
                );
            }

            if (supplyListMatrixItemsName.productQuantity === item.itemName) {
                rowItems.push(
                    <ListRowItem
                        key={getUniqueKey()}
                        width={item.width}
                    >
                        <Field
                            name={filedName.quantity}
                            component={Textbox}
                            initialValue={formItem[filedName.quantity]}
                            validate={{
                                required: true,
                                integer: true,
                                number: true
                            }}
                            onFieldBLur={value => updateItem(value, itemIndex, filedName.quantity)}
                        />
                    </ListRowItem>
                );
            }

            if (supplyListMatrixItemsName.pricePerItem === item.itemName) {
                rowItems.push(
                    <ListRowItem
                        key={getUniqueKey()}
                        width={item.width}
                    >
                        <Field
                            name={filedName.pricePerItem}
                            component={Textbox}
                            initialValue={formItem[filedName.pricePerItem]}
                            validate={{
                                required: true,
                                number: true
                            }}
                            onFieldBLur={value => updateItem(value, itemIndex, filedName.pricePerItem)}
                        />
                    </ListRowItem>
                );
            }

            if (supplyListMatrixItemsName.plusIcon === item.itemName) {
                rowItems.push(
                    <ListRowItem
                        key={getUniqueKey()}
                        width={item.width}
                    >
                        <Icon icon={close} />
                    </ListRowItem>
                );
            }

            if (supplyListMatrixItemsName.equalIcon === item.itemName) {
                rowItems.push(
                    <ListRowItem
                        key={getUniqueKey()}
                        width={item.width}
                    >
                        <Icon icon={equal} />
                    </ListRowItem>
                );
            }
        });

        return rowItems;
    }, [
        formItem,
        itemIndex,
        updateItem,
        filedName.quantity,
        filedName.pricePerItem,
        filedName.rowProductName
    ]);

    const rowProductSum = useMemo(() => {
        if (isNumber(formItem[filedName.quantity]) && isNumber(formItem[filedName.pricePerItem])) {
            return formItem[filedName.quantity] * formItem[filedName.pricePerItem];
        }

        return 0;
    }, [
        filedName.pricePerItem,
        filedName.quantity,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        formItem[filedName.quantity],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        formItem[filedName.pricePerItem],
        formItem
    ]);

    return (
        <>
            {
                getRowItems
            }
            <div className={classes.supplyAddListItem__itemTotalPrice}>
                <span>{rowProductSum}</span>&nbsp;₴
            </div>
            {
                itemIndex !== 0 && (
                    <Button
                        size="small"
                        icon={trash}
                        type="danger"
                        transparent
                        className={classes.supplyAddListItem__deleteButton}
                        actionHandler={() => removeItem(itemIndex)}
                    />
                )
            }

        </>
    );
};

export { SupplyAddListItem };
