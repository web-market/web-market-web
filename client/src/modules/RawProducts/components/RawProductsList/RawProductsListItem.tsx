import React from 'react';
import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';
import classes from './styles/index.scss';
import { TooltipAction } from '../../../../baseComponents/TooltipAction/TooltipAction';

const RawProductsListItem = (
    {
        id,
        name,
        handleItemClick,
        actions
    }
) => {
    return (
        <div onClick={() => handleItemClick(id)}>
            <PaddingBox
                hrSmall
                className={classes.rawProductsListItem}
            >
                <div>{name}</div>
                <TooltipAction
                    targetElementId={id}
                    actionList={actions}
                />
            </PaddingBox>
        </div>
    );
};

export { RawProductsListItem };
