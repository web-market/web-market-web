import React, { useContext } from 'react';
import { ListRow } from '../../../../../baseComponents/List';
import { SupplyAddListItem } from './SupplyAddListItem';
import Form from '../../../../../baseComponents/Form';
import { ADD_SUPPLY_ROW_PRODUCT_FORM } from '../../const';
import { SupplyAddContext } from '../../store/const';

const SupplyAddListBody = (
    {
        rawProducts,
        handleSupplyRawProductSubmit
    }
) => {
    const {
        itemsToAdd,
        removeItem,
        updateItem
    } = useContext(SupplyAddContext);

    return (
        <Form
            resetFormValues={false}
            noValuesOnInitInContext
            onSubmit={handleSupplyRawProductSubmit}
            name={ADD_SUPPLY_ROW_PRODUCT_FORM}
        >
            {
                itemsToAdd.map((item, index) => {
                    return (
                        <ListRow
                            key={item.id}
                        >
                            <SupplyAddListItem
                                item={item}
                                rawProducts={rawProducts}
                                itemIndex={index}
                                removeItem={removeItem}
                                updateItem={updateItem}
                            />
                        </ListRow>
                    );
                })
            }
        </Form>
    );
};

export { SupplyAddListBody };
