import React, { FC } from 'react';
import ClassNames from 'classnames';
import classes from './styles/index.scss';
import { Checkbox } from '../Checkbox/Checkbox';

type DropDownItemProps = {
    id: string | number;
    value: string | number;
    multiSelect?: boolean;
    isChecked?: boolean;
    selectedValue: string | number;
    handleItemClick: (id: string | number, isChecked?: boolean) => any;
};

const DropDownItem: FC<DropDownItemProps> = (
	{
		id,
		value,
        multiSelect,
        isChecked,
		selectedValue,
		handleItemClick
	}
) => {
	const componentsClassNames = ClassNames(
		{
			[classes.dropdownItem__selected]: !multiSelect && selectedValue === id,
			[classes.dropdownItem__multiSelect]: multiSelect
		},
		classes.dropdownItem
	);

	return (
		<>
			{
                multiSelect && (
				    <div className={componentsClassNames}>
                        <Checkbox
                            value={isChecked}
                            handleClick={(isChecked => handleItemClick(id, isChecked))}
                            className={classes.dropdownItem__checkBox}
                        />
                        <div>
                            {value}
                        </div>
                    </div>
				)
			}
			{
				!multiSelect && (
					<div
						onClick={() => handleItemClick(id)}
						className={componentsClassNames}
					>
						{value}
					</div>
				)
			}
		</>
	);
};

DropDownItem.defaultProps = {
	handleItemClick: () => {}
};

export default DropDownItem;
