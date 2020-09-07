import React, { FC, useEffect, useCallback } from 'react';

import { Icon } from '../../Icon/Icon';
import HeaderText from '../../HeaderText';
import classes from '../styles/index.scss';
import { close } from '../../../icons';
// eslint-disable-next-line import/extensions
import { ReactElement } from '../../../../typings/modules/react';

type ModalHeaderProps = {
    label: string | ReactElement<any>;
    handleClose: () => void;
};

const ModalHeader:FC<ModalHeaderProps> = (
	{
		label,
		handleClose
	}
	) => {
	const handleCloseModal = useCallback((e) => {
		const { code, keyCode } = e;

		if (code === 'Escape' || keyCode === 27) {
			handleClose();
		}
	}, [handleClose]);

	useEffect(() => {
		window.addEventListener('keyup', handleCloseModal);

		return () => {
			window.removeEventListener('keyup', handleCloseModal);
		};
	}, [handleCloseModal]);

    return (
        <div className={classes.modalHeader}>
            <HeaderText bold>
                { label }
            </HeaderText>
			<Icon
				icon={close}
				className={classes.modalHeader_closeButton}
				onClick={handleClose}
			/>
        </div>
    );
};

export { ModalHeader };
