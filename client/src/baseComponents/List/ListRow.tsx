import React, { FC, ReactNode } from 'react';

import classes from './styles/index.scss';
import ClassNames from 'classnames';

type ListRowPropsType = {
    children: ReactNode,
    className?: string,
    pointer?: boolean,
    onClick?: () => void
};

const ListRow:FC<ListRowPropsType> = (
	{
		children,
        className,
        onClick,
        pointer
	}
) => {
    const componentClassName = ClassNames(
        classes.listRow,
        {
            [classes.listRow__pointer]: pointer
        },
        className
    );

	return (
		<div
            onClick={onClick}
			className={componentClassName}
		>
			{children}
		</div>
	);
};

ListRow.defaultProps = {
    pointer: false
};

export { ListRow };
