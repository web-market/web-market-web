import React from 'react';
import { useHistory } from 'react-router-dom';

import { AdminControlHeader } from '../../../../../components/AdminControlHeader/AdminControlHeader';
import { URL } from '../../../../../components/consts';

const ProductsHeader = () => {
	const { push } = useHistory();

	const actions = [
		{
			type: 'primary',
			actionHandler: () => push(URL.CATALOG.CREATE_PRODUCT),
			label: '!!Добавить товар'
		}
	];

	return (
		<AdminControlHeader
			label="!!Товары"
			actions={actions}
		/>
	);
};

export { ProductsHeader };
