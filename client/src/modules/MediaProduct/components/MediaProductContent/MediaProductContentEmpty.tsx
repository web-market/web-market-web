import React from 'react';

import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';
import HeaderText from '../../../../baseComponents/HeaderText';
import { EmptyContainer } from '../../../../baseComponents/EmptyContainer/EmptyContainer';

import MediaProductAddCategoryForm from '../MediaProductAddCategoryForm';

import classes from './styles/index.scss';

const MediaProductContentEmpty = () => {
	return (
		<EmptyContainer>
			<PaddingBox
				small
				className={classes.mediaProductListEmptyContent}
			>
				<HeaderText>
					!!Для загрузки медиа файлов создайте каталог
				</HeaderText>
				<MediaProductAddCategoryForm />
			</PaddingBox>
		</EmptyContainer>
	);
};

export default MediaProductContentEmpty;
