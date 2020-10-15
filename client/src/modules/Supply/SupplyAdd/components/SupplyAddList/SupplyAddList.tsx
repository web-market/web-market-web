import React, { useContext } from 'react';
import { List } from '../../../../../baseComponents/List';
import { SupplyAddListHeader } from './SupplyAddListHeader';
import { SupplyAddListBody } from './SupplyAddListBody';
import { MarginBox } from '../../../../../baseComponents/MarginBox/MarginBox';
import { Button } from '../../../../../baseComponents/Button/Button';
import { SupplyAddContext } from '../../store/const';
import classes from './styles/index.scss';
import { getBlankSupplyItem } from '../../utils';
import { isNullOrUndefined, scrollTo } from '../../../../../utils';
import { PendingCloak } from '../../../../../baseComponents/PendingCloak/PendingCloak';

const SupplyAddList = (
    {
        rawProducts,
        handleSupplyRawProductSubmit
    }
) => {
    const { addItem } = useContext(SupplyAddContext);

    const handleAddBlankSupplyItem = () => {
        addItem(getBlankSupplyItem());
        scrollTo(document.body.scrollHeight);
    };

    return (
        <MarginBox
            tSmall
            bExtraLarge
        >
            {
                isNullOrUndefined(rawProducts) && (
                    <PendingCloak />
                )
            }
            {
                !isNullOrUndefined(rawProducts) && (
                    <List
                        className={classes.supplyAddList}
                    >
                        <SupplyAddListHeader />
                        <SupplyAddListBody
                            rawProducts={rawProducts}
                            handleSupplyRawProductSubmit={handleSupplyRawProductSubmit}
                        />
                    </List>
                )
            }
            <Button
                type="secondary"
                label="Добавить еще"
                actionHandler={handleAddBlankSupplyItem}
            />
        </MarginBox>
    );
};

export { SupplyAddList };
