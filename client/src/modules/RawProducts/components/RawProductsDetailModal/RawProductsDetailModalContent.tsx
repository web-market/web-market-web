import React, { useContext, useMemo } from 'react';
import { ModalContent, ModalFooter, ModalHeader } from '../../../../baseComponents/Modal';
import { PreviewField } from '../../../../baseComponents/PreviewField/PreviewField';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import { Button } from '../../../../baseComponents/Button/Button';
import { RawProductContext } from '../../store/const';
import { getArrayElementByKey, isUndefined } from '../../../../utils';

const RawProductsDetailModalContent = (
    {
        handleClose,
        modalData
    }
) => {
    const { rawProducts, manufactures } = useContext(RawProductContext);

    const currentRawProductData = useMemo(() => {
        return getArrayElementByKey(rawProducts, modalData.id);
    }, [rawProducts, modalData.id]);

    const currentManufacturesData = useMemo(() => {
        if (!isUndefined(currentRawProductData)) {
            return getArrayElementByKey(manufactures, currentRawProductData.manufacturerId);
        }
    }, [manufactures, currentRawProductData]);

    return (
        <>
            <ModalHeader
                handleClose={handleClose}
                label={`!Типовый товар: ${currentRawProductData?.name}`}
            />
            <ModalContent>
                <PreviewField
                    alignment="horizontal"
                    label="!!название:"
                    value={currentRawProductData?.name}
                />
                <PreviewField
                    alignment="horizontal"
                    label="!!производитель:"
                    value={currentManufacturesData?.name}
                />
                <PreviewField
                    alignment="horizontal"
                    label="!!описание:"
                    value={currentRawProductData?.description}
                />
            </ModalContent>
            <ModalFooter>
                <ButtonGroup
                    rightButtons={(
                        <Button
                            actionHandler={handleClose}
                            label="!!Закрыть"
                            type="secondary"
                        />
                    )}
                />
            </ModalFooter>
        </>
    );
};

export { RawProductsDetailModalContent };
