import React from 'react';
import Modal from '../../../../baseComponents/Modal';
import { RawProductsEditModalContent } from './RawProductsEditModalContent';

const RawProductsEditModal = (
    {
        isOpen,
        modalData,
        handleClose
    }
) => {
    return (
        <Modal
            size="large"
            isOpen={isOpen}
            handleClose={handleClose}
            render={renderData => {
                return (
                    <RawProductsEditModalContent
                        {...renderData}
                        modalData={modalData}
                    />
                );
            }}
        />
    );
};

export { RawProductsEditModal };
