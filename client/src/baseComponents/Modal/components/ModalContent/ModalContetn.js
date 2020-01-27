import React from 'react';

import classes from './styles/index.scss';

const ModalContent = ({ children }) => {
	return (
		<div className={classes.modalContent}>{ children }</div>
	);
};

export { ModalContent };
