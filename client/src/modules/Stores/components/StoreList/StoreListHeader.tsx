import React from 'react';
import { storeListMatrix } from './storeListMatrix';
import { ListHeader, ListHeaderItem } from '../../../../baseComponents/List';
import { getUniqueKey } from '../../../../utils';

const StoreListHeader = () => {
    return (
        <ListHeader>
            {
                storeListMatrix.map(item => {
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

export { StoreListHeader };
