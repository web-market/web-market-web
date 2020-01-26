import React from 'react';
import PropTypes from 'prop-types';

import HeaderText from '../../../HeaderText';
import classes from './styles/index.scss';

const ModalHeader = ({ label }) => {
    return (
        <div className={classes.modalHeader}>
            <HeaderText bold>
                { label }
            </HeaderText>
        </div>
    );
};

ModalHeader.propTypes = {
    label: PropTypes.string.isRequired
};

export { ModalHeader };
