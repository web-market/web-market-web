import React, { FC } from 'react';
import { SupplyListPropsType } from './types';
import { List } from '../../../../../baseComponents/List';
import { SupplyListHeader } from './SupplyListHeader';
import { SupplyListBody } from './SupplyListBody';

const SupplyList:FC<SupplyListPropsType> = (
    {
        supplies
    }
) => {
    return (
        <List>
            <SupplyListHeader />
            <SupplyListBody
                supplies={supplies}
            />
        </List>
    );
};

export { SupplyList };
