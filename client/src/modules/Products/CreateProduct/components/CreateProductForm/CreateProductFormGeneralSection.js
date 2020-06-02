import React from 'react';
import { Typography } from '../../../../../baseComponents/Typography/Typography';
import { Field } from '../../../../../baseComponents/Form';
import {
	FormLayoutItem,
	FormLayoutItemGroup
} from '../../../../../baseComponents/FormLayout';
import {
	Textbox,
	AjaxDropdown,
	Checkbox
} from '../../../../../baseComponents/Form/Adapters';
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
						width="40%"
						placeholder="000.00"
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
						label="!!Производитель"
						name="filterValueIds"
						component={AjaxDropdown}
						url={ENDPOINT.GET_ALL_MANUFACTURES}
					/>
				</FormLayoutItem>
				<FormLayoutItem>
					<Field
						label="!!Порядок сортировки"
						name="sortOrder"
						width="40%"
						component={Textbox}
						validate={{
							number: true
						}}
					/>
				</FormLayoutItem>
				<FormLayoutItem>
					<Field
						label="!!Статус"
						name="active"
						component={Checkbox}
						value
						hasTooltip
						displayInline
						toolTipMessage="!!Отображать товар в магазине"
					/>
				</FormLayoutItem>
			</FormLayoutItemGroup>
		</div>
	);
};

export { CreateProductFormGeneralSection };
