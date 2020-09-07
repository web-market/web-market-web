import React, { FC } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.scss';

type PaddingBoxPropsType = {
    tiny?: boolean,
    small?: boolean,
    normal?: boolean,
    large?: boolean,
    vrUltraTiny?: boolean,
    hrUltraTiny?: boolean,
    tUltraTiny?: boolean,
    rUltraTiny?: boolean,
    bUltraTiny?: boolean,
    lUltraTiny?: boolean,
    vrTiny?: boolean,
    hrTiny?: boolean,
    tTiny?: boolean,
    rTiny?: boolean,
    bTiny?: boolean,
    lTiny?: boolean,
    vrSmall?: boolean,
    hrSmall?: boolean,
    tSmall?: boolean,
    rSmall?: boolean,
    bSmall?: boolean,
    lSmall?: boolean,
    vrNormal?: boolean,
    hrNormal?: boolean,
    tNormal?: boolean,
    rNormal?: boolean,
    bNormal?: boolean,
    lNormal?: boolean,
    vrLarge?: boolean,
    hrLarge?: boolean,
    tLarge?: boolean,
    rLarge?: boolean,
    bLarge?: boolean,
    lLarge?: boolean,
    bExtraLarge?: boolean,

    className?: string
};

const PaddingBox: FC<PaddingBoxPropsType> = ({ children,
                        tiny, small, normal, large,
						vrUltraTiny, hrUltraTiny, tUltraTiny, rUltraTiny, bUltraTiny, lUltraTiny,
                        vrTiny, hrTiny, tTiny, rTiny, bTiny, lTiny,
                        vrSmall, hrSmall, tSmall, rSmall, bSmall, lSmall,
                        vrNormal, hrNormal, tNormal, rNormal, bNormal, lNormal,
                        vrLarge, hrLarge, tLarge, rLarge, bLarge, lLarge,
						className, bExtraLarge
}) => {
    const componentClassName = classNames(
        {
            [classes.padding_tiny]: tiny,
            [classes.padding_small]: small,
            [classes.padding_normal]: normal,
            [classes.padding_large]: large,

			[classes.padding_ultraVrTiny]: vrUltraTiny,
			[classes.padding_ultraHrTiny]: hrUltraTiny,
			[classes.padding_ultraTTiny]: tUltraTiny,
			[classes.padding_ultraRTiny]: rUltraTiny,
			[classes.padding_ultraBTiny]: bUltraTiny,
			[classes.padding_ultraLTiny]: lUltraTiny,

            [classes.padding_vrTiny]: vrTiny,
            [classes.padding_hrTiny]: hrTiny,
            [classes.padding_tTiny]: tTiny,
            [classes.padding_rTiny]: rTiny,
            [classes.padding_bTiny]: bTiny,
            [classes.padding_lTiny]: lTiny,

            [classes.padding_vrSmall]: vrSmall,
            [classes.padding_hrSmall]: hrSmall,
            [classes.padding_tSmall]: tSmall,
            [classes.padding_rSmall]: rSmall,
            [classes.padding_bSmall]: bSmall,
            [classes.padding_lSmall]: lSmall,

            [classes.padding_vrNormal]: vrNormal,
            [classes.padding_hrNormal]: hrNormal,
            [classes.padding_tNormal]: tNormal,
            [classes.padding_rNormal]: rNormal,
            [classes.padding_bNormal]: bNormal,
            [classes.padding_lNormal]: lNormal,

            [classes.padding_vrLarge]: vrLarge,
            [classes.padding_hrLarge]: hrLarge,
            [classes.padding_tLarge]: tLarge,
            [classes.padding_rLarge]: rLarge,
            [classes.padding_bLarge]: bLarge,
            [classes.padding_lLarge]: lLarge,

            [classes.padding_bExtraLarge]: bExtraLarge,
        },
		className
    );

    return (
        <div className={componentClassName}>{ children }</div>
    );
};

PaddingBox.propTypes = {
    tiny: PropTypes.bool,
    small: PropTypes.bool,
    normal: PropTypes.bool,
    large: PropTypes.bool,

	vrUltraTiny: PropTypes.bool,
	hrUltraTiny: PropTypes.bool,
	tUltraTiny: PropTypes.bool,
	rUltraTiny: PropTypes.bool,
	bUltraTiny: PropTypes.bool,
	lUltraTiny: PropTypes.bool,

	vrTiny: PropTypes.bool,
    hrTiny: PropTypes.bool,
    tTiny: PropTypes.bool,
    rTiny: PropTypes.bool,
    bTiny: PropTypes.bool,
    lTiny: PropTypes.bool,
    bExtraLarge: PropTypes.bool,

	className: PropTypes.string
};

export { PaddingBox };
