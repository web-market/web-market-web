import React from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalFooter, ModalContent } from '../../../../../baseComponents/Modal';
import ButtonGroup from '../../../../../baseComponents/ButtonGroup';
import Button from '../../../../../baseComponents/Button';

const CategoriesEditCategoryModalContent = (
	{
		modalData,
		handleClose
	}
) => {
	const leftButtons = (
		<Button
			actionHandler={handleClose}
			label="!!Закрыть"
			type="secondary"
		/>
	);

	const rightButtons = (
		<Button
			actionHandler={() => console.warn('Категория отредактиована')}
			label="!!Редактировать"
			type="primary"
		/>
	);

	return (
		<>
			<ModalHeader
				handleClose={handleClose}
				label="Modal header text"
			/>
			<ModalContent>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
			</ModalContent>
			<ModalFooter>
				<ButtonGroup
					leftButtons={leftButtons}
					rightButtons={rightButtons}
				/>
			</ModalFooter>
		</>
	);
};

CategoriesEditCategoryModalContent.defaultProps = {};

CategoriesEditCategoryModalContent.propTypes = {
	modalData: PropTypes.object
};

export default CategoriesEditCategoryModalContent;
