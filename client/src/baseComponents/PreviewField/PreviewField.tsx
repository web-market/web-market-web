import React, { FC } from 'react';
import { PaddingBox } from '../PaddingBox/PaddingBox';
import classes from './styles/index.scss';
import ClassNames from 'classnames';
import { ALIGNMENT } from './const';

type PreviewFieldProps = {
    label: string;
    alignment?: string;
    value: string | number;
};

const PreviewField:FC<PreviewFieldProps> = (
    {
        label,
        value,
        alignment
    }
) => {
    const componentClassName = ClassNames(
        {
            [classes.previewField__vertical]: alignment === ALIGNMENT.VERTICAL,
            [classes.previewField__horizontal]: alignment === ALIGNMENT.HORIZONTAL
        },
        classes.previewField
    );

    return (
        <PaddingBox
            vrSmall
            className={componentClassName}
        >
            <div className={classes.previewField_label}>
                {label}
            </div>
            <div>
                {value}
            </div>
        </PaddingBox>
    );
};

PreviewField.defaultProps = {
    alignment: ALIGNMENT.VERTICAL
};

export { PreviewField };
