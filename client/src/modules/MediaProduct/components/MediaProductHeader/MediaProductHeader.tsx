import React, { useContext } from 'react';

import { AdminControlHeader } from '../../../../components/AdminControlHeader/AdminControlHeader';
import { MediaProductModalsContext, MODALS } from '../MediaProductModalsProvider/const';

const MediaProductHeader = () => {
	const { openModal } = useContext(MediaProductModalsContext);

	const actions = [
		{
			type: 'primary',
			actionHandler: () => openModal(MODALS.MEDIA_CATEGORY_MODAL),
			label: '!!Добавить категорию'
		}
	];

	return (
		<AdminControlHeader
			label="!!!Медиа файлы"
			actions={actions}
		/>
	);
};

export { MediaProductHeader };
