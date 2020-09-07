import React from 'react';
import Modal from '../../../../baseComponents/Modal';
import { RawProductsDetailModalContent } from './RawProductsDetailModalContent';

const RawProductsDetailModal = (
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
                    <RawProductsDetailModalContent
                        {...renderData}
                        modalData={modalData}
                    />
                );
            }}
        />
    );
};

export { RawProductsDetailModal };
