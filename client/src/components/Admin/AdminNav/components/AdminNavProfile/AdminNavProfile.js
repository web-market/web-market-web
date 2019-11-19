import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import PaddingBox from '../../../../../baseComponents/PaddingBox';

import { AdminNavProfileICollapseContent } from './AdminNavProfileICollapseContent';
import { navProfile } from '../../store/staticData';

import classes from './styles/index.scss';
import { angleRight } from '../../../../../icons';
import { Icon } from '../../../../../baseComponents/Icon/Icon';
import classNames from 'classnames';
import { isUndefined } from '../../../../../utils';

const AdminNavProfile = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [height, setHeight] = useState(0);
	const [collapseRef, setCollapseRef] = useState();

	const iconClassName = classNames(
		classes.adminNavProfile_icon,
		{
			[classes.adminNavProfile_iconIsOpen]: isOpen
		}
	);

	useEffect(() => {
		if (isUndefined(collapseRef)) return;

		const collapseContentHeight = collapseRef.childNodes[0].offsetHeight;

		return isOpen ? setHeight(collapseContentHeight) : setHeight(0);
	}, [isOpen, collapseRef]);

	return (
		<>
			<PaddingBox
				hrSmall
				vrTiny
				className={classes.adminNavProfile}
			>
				<>
					<img
						className={classes.adminNavProfile_userLogo}
						src={navProfile.imgUrl}
						alt="user_img"
					/>
					<div
						onClick={() => setIsOpen(!isOpen)}
						className={classes.adminNavProfile_userNameWrapper}
					>
						<div className={classes.adminNavProfile_userName}>
							{navProfile.userName}
						</div>
						<Icon
							className={iconClassName}
							icon={angleRight}
						/>
					</div>
				</>
			</PaddingBox>
			<AdminNavProfileICollapseContent
				setCollapseRef={setCollapseRef}
				height={height}
			/>
		</>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminNavProfile };
