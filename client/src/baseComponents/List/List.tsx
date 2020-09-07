import React, { FC, ReactNode } from 'react';
import classes from './styles/index.scss';
import ClassNames from 'classnames';

type ListPropsType = {
    children: ReactNode,
    className?: string
};

const List:FC<ListPropsType> = ((
	{
		children,
        className
	}
) => {
    const componentsClassName = ClassNames(
        classes.list,
        className
    );

	return (
		<div
            className={componentsClassName}
		>
			{children}
		</div>
	);
});

export { List };
