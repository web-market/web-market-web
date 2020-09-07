import React, { FC } from 'react';

import Modal from '../../../../baseComponents/Modal';
import { StoreAddModalContent } from './StoreAddModalContent';
import { StoreAddModalPropsType } from './types';

const StoreAddModal:FC<StoreAddModalPropsType> = (
	{
		isOpen,
		handleClose
	}
) => {
	return (
		<Modal
			isOpen={isOpen}
			handleClose={handleClose}
            render={renderData => {
                return (
                    <StoreAddModalContent
                        {...renderData}
                    />
                );
            }}
		/>
	);
};

export { StoreAddModal };
