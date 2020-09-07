import React from 'react';

import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';
import AdminNavigationListItem from '../AdminNavigationList/AdminNavigationListItem';

import { bottomNavItem } from '../../../consts';

const AdminNavigationBottomItemList = () => {
	return (
		<>
			<PaddingBox vrTiny>
				<>
					{
						bottomNavItem.map(item => {
							return (
								<AdminNavigationListItem
									key={item.label}
									icon={item.icon}
									label={item.label}
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

export { AdminNavigationBottomItemList };
