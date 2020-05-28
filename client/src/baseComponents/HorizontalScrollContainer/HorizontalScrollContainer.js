import React, { useState, useContext } from 'react';

import classes from './styles/index.scss';
import { NavigationGlobalContext } from '../../App/store/NavigationGlobalContext';
import { getBooleanCookie } from '../../utils';

const HorizontalScrollContainer = (
	{
		children,
		contentWidth: contentWidthFromProps
	}
) => {
	const { isCollapsed } = useContext(NavigationGlobalContext);

	//140 - collapse menu offset + margin + scroll
	//340 - menu offset + margin + scroll
	const menuOffset = getBooleanCookie(isCollapsed) ? 155 : 355;

	const [clientWidthPercent, setClientWidthPercent] = useState(0);
	setTimeout(() => {
		setClientWidthPercent(100 - (100 * menuOffset) / document.documentElement.clientWidth);
	}, 100);

	const contentWidth = contentWidthFromProps < (document.documentElement.clientWidth - menuOffset)
		? `${clientWidthPercent}vw`
		: `${contentWidthFromProps}px`;

	return (
		<>
			{
				clientWidthPercent === 0 && (
					<div>
						waiting for content...
					</div>
				)
			}
			{
				clientWidthPercent !== 0 && (
					<div
						className={classes.horizontalScrollContainer}
						style={{ width: `${clientWidthPercent}vw` }}
					>
						<div style={{ width: contentWidth }}>
							{children}
						</div>
					</div>
				)
			}
		</>
	);
};

export { HorizontalScrollContainer };
