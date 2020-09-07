import React, { useContext } from 'react';
import { ListRow } from '../../../../../baseComponents/List';
import { SupplyAddListItem } from './SupplyAddListItem';
import Form from '../../../../../baseComponents/Form';
import { ADD_SUPPLY_ROW_PRODUCT_FORM } from '../../const';
import { SupplyAddContext } from '../../store/const';

const SupplyAddListBody = () => {
    const {
        itemsToAdd,
        removeItem,
        updateItem
    } = useContext(SupplyAddContext);

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Form
            noValuesOnInitInContext
            onSubmit={handleSubmit}
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
