import React from 'react';
import { GridLayoutRow } from '../../../../../baseComponents/GridLayout';
import { Typography } from '../../../../../baseComponents/Typography/Typography';
import { FormLayoutItem } from '../../../../../baseComponents/FormLayout';
import classes from './styles/index.scss';

const SupplyAddFormField = (
    {
        label,
        required,
        children
    }
) => {
    return (
        <FormLayoutItem>
            <GridLayoutRow
                grid="3-_1-6"
            >
                <Typography>
                    {label}
                    {
                        required && (
                            <span className={classes.supplyAddFormField__asterix}>*</span>
                        )
                    }
                </Typography>
                {children}
            </GridLayoutRow>
        </FormLayoutItem>
    );
};

SupplyAddFormField.defaultProps = {
    label: '',
    required: false,
};

export { SupplyAddFormField };
