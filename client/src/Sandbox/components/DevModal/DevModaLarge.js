import React from 'react';
import { ModalHeader } from '../../../baseComponents/Modal';

const DevModalLarge = ({ handleClose }) => {
    return (
		<>
			<ModalHeader
				handleClose={handleClose}
				label="Modal header text"
			/>
			<div>large modal</div>
		</>
    );
};

export default DevModalLarge;
