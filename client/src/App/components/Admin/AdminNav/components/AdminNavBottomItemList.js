import React from 'react';
// import PropTypes from 'prop-types';

import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';
import { AdminNavItem } from './AdminNavItem';

import { bottomNavItem } from '../store/staticData';

const AdminNavBottomItemList = () => {
	return (
		<>
			<PaddingBox vrTiny>
				<PaddingBox tiny>
					<div>!!!Настройки</div>
				</PaddingBox>
				<>
					{
						bottomNavItem.map(item => {
							return (
								<AdminNavItem
									key={item.label}
									icon={item.icon}
									label={item.label}
								/>
							);
						})
					}
				</>
			</PaddingBox>
		</>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminNavBottomItemList };
