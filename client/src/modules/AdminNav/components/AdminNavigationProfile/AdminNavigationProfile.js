import React, { useEffect, useState } from 'react';

import PaddingBox from '../../../../baseComponents/PaddingBox';

import { AdminNavigationProfileICollapseContent } from './AdminNavigationProfileICollapseContent';
import { navProfile } from '../../staticData';

import classes from './styles/index.scss';
import { angleRight } from '../../../../icons';
import { Icon } from '../../../../baseComponents/Icon/Icon';
import classNames from 'classnames';
import { isUndefined } from '../../../../utils';

const AdminNavigationProfile = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [height, setHeight] = useState(0);
	const [collapseRef, setCollapseRef] = useState();

	const iconClassName = classNames(
		classes.adminNavigationProfile_icon,
		{
			[classes.adminNavigationProfile_iconIsOpen]: isOpen
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
				className={classes.adminNavigationProfile}
			>
				<>
					<img
						className={classes.adminNavigationProfile_userLogo}
						src={navProfile.imgUrl}
						alt="user_img"
					/>
					<div
						onClick={() => setIsOpen(!isOpen)}
						className={classes.adminNavigationProfile_userNameWrapper}
					>
						<div className={classes.adminNavigationProfile_userName}>
							{navProfile.userName}
						</div>
						<Icon
							className={iconClassName}
							icon={angleRight}
						/>
					</div>
				</>
			</PaddingBox>
			<AdminNavigationProfileICollapseContent
				setCollapseRef={setCollapseRef}
				height={height}
			/>
		</>
	);
};

export { AdminNavigationProfile };
