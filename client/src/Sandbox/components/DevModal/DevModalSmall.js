import React from 'react';
import { ModalHeader } from '../../../baseComponents/Modal';

const DevModalSmall = ({ handleClose }) => {
    return (
		<>
			<ModalHeader
				handleClose={handleClose}
				label="Modal header text"
			/>
			<div>small modal</div>
		</>
    );
};

export default DevModalSmall;
