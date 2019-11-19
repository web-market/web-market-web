import React from 'react';

import PaddingBox from '../../../../../baseComponents/PaddingBox';
import { AdminNavItem } from '../AdminNavItemList/AdminNavItem';

import { bottomNavItem } from '../../staticData/staticData';

const AdminNavBottomItemList = () => {
	return (
		<>
			<PaddingBox vrTiny>
				<>
					{
						bottomNavItem.map(item => {
							return (
								<AdminNavItem
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

export { AdminNavBottomItemList };
