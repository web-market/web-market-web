import React, { useContext } from 'react';
import { List } from '../../../../../baseComponents/List';
import { SupplyAddListHeader } from './SupplyAddListHeader';
import { SupplyAddListBody } from './SupplyAddListBody';
import { MarginBox } from '../../../../../baseComponents/MarginBox/MarginBox';
import { Button } from '../../../../../baseComponents/Button/Button';
import { SupplyAddContext } from '../../store/const';
import classes from './styles/index.scss';
import { getBlankSupplyItem } from '../../utils';
import { scrollTo } from '../../../../../utils';

const SupplyAddList = () => {
    const { addItem } = useContext(SupplyAddContext);

    const handleAddBlankSupplyItem = () => {
        addItem(getBlankSupplyItem());
        scrollTo(document.body.scrollHeight);
    };

    return (
        <MarginBox
            tSmall
            hrSmall
            bExtraLarge
        >
            <List
                className={classes.supplyAddList}
            >
                <SupplyAddListHeader />
                <SupplyAddListBody />
            </List>
            <Button
                type="secondary"
                label="Добавить еще"
                actionHandler={handleAddBlankSupplyItem}
            />
        </MarginBox>
    );
};

export { SupplyAddList };
