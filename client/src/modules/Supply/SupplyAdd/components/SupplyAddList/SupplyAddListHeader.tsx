import React from 'react';

import { ListHeader, ListHeaderItem } from '../../../../../baseComponents/List';
import { getUniqueKey } from '../../../../../utils';
import { supplyListMatrix } from './supplyListMatrix';

const SupplyAddListHeader = () => {
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

export { SupplyAddListHeader };
