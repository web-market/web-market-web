import React, { FC } from 'react';
import { SupplyListPropsType } from './types';

const SupplyList:FC<SupplyListPropsType> = (
    {
        supplies
    }
) => {
    console.log(supplies);
    return (
        <div>###NEW COMPONENT</div>
    );
};

export { SupplyList };
