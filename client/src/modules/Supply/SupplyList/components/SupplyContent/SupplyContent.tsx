import React, { useContext } from 'react';
import { SupplyContext } from '../../store/const';
import { AdminControlContentBox } from '../../../../../components/AdminControlContentBox/AdminControlContentBox';
import { MarginBox } from '../../../../../baseComponents/MarginBox/MarginBox';
import { Typography } from '../../../../../baseComponents/Typography/Typography';
import { Button } from '../../../../../baseComponents/Button/Button';
import { EmptyContainer } from '../../../../../baseComponents/EmptyContainer/EmptyContainer';
import { SupplyList } from '../SupplyList/SupplyList';
import { useHistory } from 'react-router-dom';
import { URL } from '../../../../../components/consts';
import { useGetSupplies } from '../../hooks';

const SupplyContent = () => {
    const { supplies } = useContext(SupplyContext);
    const { push } = useHistory();

    useGetSupplies();

    return (
        <AdminControlContentBox>
            {
                supplies.length !== 0 && (
                    <SupplyList
                        supplies={supplies}
                    />
                )
            }
            {
                supplies.length === 0 && (
                    <EmptyContainer
                        hasCenteredContent
                        hasVerticalContent
                    >
                        <MarginBox bSmall>
                            <Typography
                                textCenter
                                displayBlock
                                variant="20"
                            >
                                !!нет поставок
                            </Typography>
                        </MarginBox>
                        <MarginBox bSmall>
                            <Button
                                label="!!Добавить поставку"
                                type="primary"
                                actionHandler={() => push(URL.SUPPLY.ADD_SUPPLY)}
                            />
                        </MarginBox>
                    </EmptyContainer>
                )
            }
        </AdminControlContentBox>
    );
};

export { SupplyContent };
