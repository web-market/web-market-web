import React from 'react';
import { supplyListMatrix } from './supplyListMatrix';
import { ListHeader, ListHeaderItem } from '../../../../../baseComponents/List';
import { getUniqueKey } from '../../../../../utils';

const SupplyListHeader = () => {
    return (
        <ListHeader>
            {
                supplyListMatrix.map(item => {
                    return (
                        <ListHeaderItem
                            key={getUniqueKey()}
                            label={item.label}
                            width={item.width}
                        />
                    );
                })
            }
        </ListHeader>
    );
};

export { SupplyListHeader };
