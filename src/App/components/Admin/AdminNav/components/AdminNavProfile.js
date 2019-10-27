import React from 'react';
// import PropTypes from 'prop-types';

import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';
import { AdminNavItem } from './AdminNavItem';

import classNames from 'classnames';
import styles from '../styles/index.scss';

import { navProfile } from '../store/staticData';

const AdminNavProfile = () => {
	const componentClassName = classNames(
		styles.adminNavProfile
	);

	return (
		<div className={componentClassName}>
			<PaddingBox tNormal bNormal>
				<div>
					<img
						className={styles.adminNavProfile_userLogo}
						src={navProfile.imgUrl}
						alt="user_img"
					/>
					<div
						className={styles.adminNavProfile_userName}
					>
						{navProfile.userName}
					</div>
				</div>
			</PaddingBox>
		</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminNavProfile };
