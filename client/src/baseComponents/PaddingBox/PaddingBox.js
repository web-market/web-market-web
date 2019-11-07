import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './styles/index.scss';

const PaddingBox = ({ children,
                        tiny, small, normal, large,
						ultraVrTiny, ultraHrTiny, ultraTTiny, ultraRTiny, ultraBTiny, ultraLTiny,
                        vrTiny, hrTiny, tTiny, rTiny, bTiny, lTiny,
                        vrSmall, hrSmall, tSmall, rSmall, bSmall, lSmall,
                        vrNormal, hrNormal, tNormal, rNormal, bNormal, lNormal,
                        vrLarge, hrLarge, tLarge, rLarge, bLarge, lLarge,
						className
}) => {
    const componentClassName = classNames(
        {
            [styles.padding_tiny]: tiny,
            [styles.padding_small]: small,
            [styles.padding_small]: normal,
            [styles.padding_small]: large,

			[styles.padding_ultraVrTiny]: ultraVrTiny,
			[styles.padding_ultraHrTiny]: ultraHrTiny,
			[styles.padding_ultraTTiny]: ultraTTiny,
			[styles.padding_ultraRTiny]: ultraRTiny,
			[styles.padding_ultraBTiny]: ultraBTiny,
			[styles.padding_ultraLTiny]: ultraLTiny,

            [styles.padding_vrTiny]: vrTiny,
            [styles.padding_hrTiny]: hrTiny,
            [styles.padding_tTiny]: tTiny,
            [styles.padding_rTiny]: rTiny,
            [styles.padding_bTiny]: bTiny,
            [styles.padding_lTiny]: lTiny,

            [styles.padding_vrSmall]: vrSmall,
            [styles.padding_hrSmall]: hrSmall,
            [styles.padding_tSmall]: tSmall,
            [styles.padding_rSmall]: rSmall,
            [styles.padding_bSmall]: bSmall,
            [styles.padding_lSmall]: lSmall,

            [styles.padding_vrNormal]: vrNormal,
            [styles.padding_hrNormal]: hrNormal,
            [styles.padding_tNormal]: tNormal,
            [styles.padding_rNormal]: rNormal,
            [styles.padding_bNormal]: bNormal,
            [styles.padding_lNormal]: lNormal,

            [styles.padding_vrLarge]: vrLarge,
            [styles.padding_hrLarge]: hrLarge,
            [styles.padding_tLarge]: tLarge,
            [styles.padding_rLarge]: rLarge,
            [styles.padding_bLarge]: bLarge,
            [styles.padding_lLarge]: lLarge,
        },
		className
    );

    return (
        <div className={componentClassName}>{ children }</div>
    );
};

PaddingBox.defaultProps = {
    tiny: false,
    small: false,
    normal: false,
    large: false
};

PaddingBox.propTypes = {
    tiny: PropTypes.bool,
    small: PropTypes.bool,
    normal: PropTypes.bool,
    large: PropTypes.bool,

	ultraVrTiny: PropTypes.bool,
	ultraHrTiny: PropTypes.bool,
	ultraTTiny: PropTypes.bool,
	ultraRTiny: PropTypes.bool,
	ultraBTiny: PropTypes.bool,
	ultraLTiny: PropTypes.bool,

	vrTiny: PropTypes.bool,
    hrTiny: PropTypes.bool,
    tTiny: PropTypes.bool,
    rTiny: PropTypes.bool,
    bTiny: PropTypes.bool,
    lTiny: PropTypes.bool,

	className: PropTypes.string
};

export { PaddingBox };
