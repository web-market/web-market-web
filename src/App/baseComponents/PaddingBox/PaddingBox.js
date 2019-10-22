import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './styles';

const PaddingBox = ({ children,
                        tiny,
                        small,
                        normal,
                        large,
                        vrTiny,
                        hrTiny,
                        tTiny,
                        rTiny,
                        bTiny,
                        lTiny,
}) => {
    const componentClassName = classNames(
        {
            [styles.padding_tiny]: tiny,
            [styles.padding_small]: small,
            [styles.padding_small]: normal,
            [styles.padding_small]: large,

            [styles.padding_vrTiny]: vrTiny,
            [styles.padding_hrTiny]: hrTiny,
            [styles.padding_tTiny]: tTiny,
            [styles.padding_rTiny]: rTiny,
            [styles.padding_bTiny]: bTiny,
            [styles.padding_lTiny]: lTiny,
        }
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

    vrTiny: PropTypes.bool,
    hrTiny: PropTypes.bool,
    tTiny: PropTypes.bool,
    rTiny: PropTypes.bool,
    bTiny: PropTypes.bool,
    lTiny: PropTypes.bool,
};

export { PaddingBox };
