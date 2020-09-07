import React, { FC } from 'react';
import { List } from '../../../../baseComponents/List';
import { StoreListHeader } from './StoreListHeader';
import { StoreListBody } from './StoreListBody';
import { getUniqueKey } from '../../../../utils';
import { StoreListPropsType } from './types';

const StoreList:FC<StoreListPropsType> = (
    {
        stores
    }
) => {
    return (
        <List>
            <StoreListHeader />
            <StoreListBody
                key={getUniqueKey()}
                stores={stores}
            />
        </List>
    );
};

export { StoreList };
