import React, { useContext } from 'react';
import { MediaProductModalsContext, MODALS } from '../../consts';

import AdminControlHeader from '../../../../components/AdminControlHeader';

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
