import React, { useState } from 'react';

import Button from '../../../baseComponents/Button';
import Modal from '../../../baseComponents/Modal';
import GridLayout, { GridLayoutRow } from '../../../baseComponents/GridLayout';

import DevModalSmall from './DevModalSmall';
import DevModalMedium from './DevModalMedium';
import DevModaLarge from './DevModaLarge';

const DevModal = () => {
    const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);
    const [isMediumModalOpen, setIsMediumModalOpen] = useState(false);
    const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);

    const handleSmallModalOpen = () => {
        setIsSmallModalOpen(true);
    };

    const handleSmallModalClose = () => {
        setIsSmallModalOpen(false);
    };

    const handleMediumModalOpen = () => {
        setIsMediumModalOpen(true);
    };

    const handleMediumModalClose = () => {
        setIsMediumModalOpen(false);
    };

    const handleLargeModalOpen = () => {
        setIsLargeModalOpen(true);
    };

    const handleLargeModalClose = () => {
        setIsLargeModalOpen(false);
    };

    return (
        <>
            <GridLayout>
                <GridLayoutRow grid="2-2-2">
                    <Button
                        label="Small modal"
                        actionHandler={handleSmallModalOpen}
                    />
                    <Button
                        label="Medium modal"
                        actionHandler={handleMediumModalOpen}
                    />
                    <Button
                        label="Large modal"
                        actionHandler={handleLargeModalOpen}
                    />
                </GridLayoutRow>
            </GridLayout>
            <Modal
                isOpen={isSmallModalOpen}
                handleClose={handleSmallModalClose}
                render={(render) => <DevModalSmall {...render} />}
                size="small"
            />
            <Modal
                isOpen={isMediumModalOpen}
                handleClose={handleMediumModalClose}
                render={(render) => <DevModalMedium {...render} />}
                size="medium"
            />
            <Modal
                isOpen={isLargeModalOpen}
                handleClose={handleLargeModalClose}
                render={(render) => <DevModaLarge {...render} />}
                size="large"
            />
        </>
    );
};

export {DevModal};
