import React from 'react';
// import PropTypes from 'prop-types';

import PaddingBox from '../../../../../baseComponents/PaddingBox';
import Collapser from '../../../../../baseComponents/Collapser';

import classNames from 'classnames';
import styles from './styles/index.scss';

import { AdminNavProfileItems } from './AdminNavProfileItems';

import { navProfile } from '../../store/staticData';

const AdminNavProfile = () => {
	const componentClassName = classNames(
		styles.adminNavProfile
	);

	return (
		<div className={componentClassName}>
			<PaddingBox tNormal bTiny>
				<>
					<img
						className={styles.adminNavProfile_userLogo}
						src={navProfile.imgUrl}
						alt="user_img"
					/>
					<Collapser
						className={styles.adminNavProfile_collapser}
						content={<AdminNavProfileItems />}
						label={navProfile.userName}
						labelClassName={styles.adminNavProfile_userName}
					/>
				</>
			</PaddingBox>
		</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminNavProfile };
