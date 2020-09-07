import React from 'react';

import classes from '../styles/index.scss';

const ModalFooter = ({ children }) => {
	return (
		<div className={classes.modalFooter}>{ children }</div>
	);
};

export { ModalFooter };
