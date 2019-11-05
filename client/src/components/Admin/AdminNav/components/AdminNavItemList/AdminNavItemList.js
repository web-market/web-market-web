import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

import PaddingBox from '../../../../../baseComponents/PaddingBox';
import { AdminNavItem } from './AdminNavItem';
import { RouteContext } from '../../../../../App/store/RouteContext';

import classNames from 'classnames';
import styles from './styles/index.scss';
import { mainNavItem } from '../../store/staticData';

const AdminNavItemList = () => {
	const { history, location, match } = useContext(RouteContext);

	const componentClassName = classNames(
		styles.adminNavItemList
	);

	console.log(history);
	console.log(location);
	console.log(match);

	return (
		<div className={componentClassName}>
			<PaddingBox vrTiny>
				<>
					{
						mainNavItem.map(item => {
							return (
								<AdminNavItem
									key={item.label}
									icon={item.icon}
									label={item.label}
									items={item.items}
								/>
							);
						})
					}
				</>
			</PaddingBox>
		</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminNavItemList };
