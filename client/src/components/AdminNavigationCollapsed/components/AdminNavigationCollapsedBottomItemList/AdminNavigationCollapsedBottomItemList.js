import React from 'react';

import PaddingBox from '../../../../baseComponents/PaddingBox';
import AdminNavigationCollapsedListItem from '../AdminNavigationCollapsedList/AdminNavigationCollapsedListItem';

import { bottomNavItem } from '../../staticData';

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

export { AdminNavigationCollapsedBottomItemList };
