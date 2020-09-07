import React from 'react';

import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';
import AdminNavigationCollapsedListItem from '../AdminNavigationCollapsedList/AdminNavigationCollapsedListItem';

import { bottomNavItem } from '../../../consts';

const AdminNavigationCollapsedBottomItemList = () => {
	return (
		<>
			<PaddingBox vrTiny>
				<>
					{
						bottomNavItem.map(item => {
							return (
								<AdminNavigationCollapsedListItem
									key={item.label}
									icon={item.icon}
									link={item.link}
									hasRoute={item.hasRoute}
								/>
							);
						})
					}
				</>
			</PaddingBox>
		</>
	);
};

export { AdminNavigationCollapsedBottomItemList };
