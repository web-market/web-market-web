import React, { FC } from 'react';

import { PaddingBox } from '../PaddingBox/PaddingBox';
import { MarginBox } from '../MarginBox/MarginBox';

import classes from './styles/index.scss';
import ClassNames from 'classnames';

type EmptyContainerPropsType = {
    children: {};
    hasCenteredContent?: boolean;
    hasVerticalContent?: boolean;
};

const EmptyContainer: FC<EmptyContainerPropsType> = (
    {
        children,
        hasCenteredContent,
        hasVerticalContent
    }
) => {
    const componentClassName = ClassNames(
        {
            [classes.emptyContainer_hasCenteredContent]: hasCenteredContent,
            [classes.emptyContainer_hasVerticalContent]: hasVerticalContent
        },
        classes.emptyContainer
    );

    return (
        <MarginBox small>
            <PaddingBox
                small
                className={componentClassName}
            >
                {children}
            </PaddingBox>
        </MarginBox>
    );
};

EmptyContainer.defaultProps = {
    hasCenteredContent: false,
    hasVerticalContent: false,
};

export {EmptyContainer};
