import React from 'react';
import { Typography } from '../../../../../baseComponents/Typography/Typography';
import { Field } from '../../../../../baseComponents/Form';
import {
	FormLayoutItem,
	FormLayoutItemGroup
} from '../../../../../baseComponents/FormLayout';
import { Textbox, AjaxDropdown } from '../../../../../baseComponents/Form/Adapters';
import { ENDPOINT } from '../../consts';


const CreateProductFormGeneralSection = () => {
	return (
		<div>
			<Typography
				bold="500"
				variant="18"
			>
				!!Общая информация
			</Typography>
			<FormLayoutItemGroup padding={{ vrSmall: true }}>
				<FormLayoutItem>
					<Field
						label="!!Название товара"
						name="name"
						component={Textbox}
						required
						validate={{
							required: true,
							length: {
								max: 64
							}
						}}
					/>
				</FormLayoutItem>
				<FormLayoutItem>
					<Field
						label="!!Цена"
						name="price"
						component={Textbox}
						required
						validate={{
							required: true,
							number: true
						}}
					/>
				</FormLayoutItem>
				<FormLayoutItem>
					<Field
						label="!!Категории"
						name="categoryIds"
						component={AjaxDropdown}
						url={ENDPOINT.GET_ALL_CATEGORIES}
						required
						validate={{
							required: true
						}}
					/>
				</FormLayoutItem>
				<FormLayoutItem>
					<Field
						label="!!Фильтры"
						name="filterValueIds"
						component={AjaxDropdown}
						url={ENDPOINT.GET_ALL_FILTERS}
						required
						validate={{
							required: true
						}}
					/>
				</FormLayoutItem>
				<FormLayoutItem>
					<Field
						label="!!Порядок сортировки"
						name="sortOrder"
						component={Textbox}
					/>
				</FormLayoutItem>
			</FormLayoutItemGroup>
		</div>
	);
};

export { CreateProductFormGeneralSection };
