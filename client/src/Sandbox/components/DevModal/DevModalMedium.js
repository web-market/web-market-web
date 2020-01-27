import React from 'react';
import { ModalHeader } from '../../../baseComponents/Modal';

const DevModalMedium = ({ handleClose }) => {
    return (
        <>
            <ModalHeader
				handleClose={handleClose}
				label="Modal header text"
			/>
            <div>medium modal</div>
        </>
    );
};

export default DevModalMedium;
