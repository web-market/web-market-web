import React, { FC } from 'react';

import classes from './styles/index.scss';
import ClassNames from 'classnames';
import { TypographyType } from './types';

const Typography: FC<TypographyType> = (
	{
		bold,
		variant,
        letterSpacing,
		children,
        className,
		displayBlock,
        lineHeight,
        upperCase,
        textCenter
	}
) => {
	const componentClassName = ClassNames(
		{
			[classes.typography_8]: variant === '8',
            [classes.typography_10]: variant === '10',
			[classes.typography_12]: variant === '12',
			[classes.typography_14]: variant === '14',
			[classes.typography_16]: variant === '16',
			[classes.typography_18]: variant === '18',
			[classes.typography_20]: variant === '20',
			[classes.typography_22]: variant === '22',
			[classes.typography_24]: variant === '24',
			[classes.typography_26]: variant === '26',
			[classes.typography_28]: variant === '28',
			[classes.typography_32]: variant === '32',
            [classes.typography_48]: variant === '48',
			[classes.typography_54]: variant === '54',
            [classes.typography_82]: variant === '82',
			[classes.typography_bold200]: bold === '200',
			[classes.typography_bold300]: bold === '300',
			[classes.typography_bold400]: bold === '400',
			[classes.typography_bold500]: bold === '500',
			[classes.typography_bold600]: bold === '600',
			[classes.typography_bold700]: bold === '700',
			[classes.typography_bold800]: bold === '800',
			[classes.typography_lineHeight1]: lineHeight === '1',
			[classes.typography_displayBlock]: displayBlock,
			[classes.typography_upperCase]: upperCase,
			[classes.text_center]: textCenter
		},
        className
	);

	return (
		<span
            style={{
                letterSpacing
            }}
            className={componentClassName}
		>
            { children }
		</span>
	);
};

Typography.defaultProps = {
	bold: '400',
	variant: '16',
    lineHeight: '',
    letterSpacing: '',
	displayBlock: false,
	upperCase: false,
    textCenter: false,
};

export { Typography };
