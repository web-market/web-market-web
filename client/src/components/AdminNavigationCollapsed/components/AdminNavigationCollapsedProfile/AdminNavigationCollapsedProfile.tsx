import React, { useRef, useState, useContext } from 'react';

import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';
import { AdminNavigationCollapsedContent } from '../AdminNavigationCollapsedContent/AdminNavigationCollapsedContent';

import { navProfile } from '../../../consts';

import classes from './styles/index.scss';
import ClassName from 'classnames';
import OverlayPoint from '../../../../baseComponents/OverlayPoint';
import { profileItem } from './staticData';
import { NavigationGlobalContext } from '../../../../App/store/NavigationGlobalContext';

const AdminNavigationCollapsedProfile = () => {
	const { isCollapsed } = useContext(NavigationGlobalContext);
	const [isOpen, setIsOpen] = useState(false);

	const tooltipActionRef = useRef(null);

	const logoClassName = ClassName(
		{
			[classes.adminNavigationCollapsedProfile_userLogo__collapsed]: isCollapsed,
			[classes.adminNavigationCollapsedProfile__collapsed]: isCollapsed,
			[classes.adminNavigationCollapsedProfile_userLogo]: !isCollapsed
		}
	);

	const componentClassName = ClassName(
		{
			[classes.adminNavigationCollapsedProfile__collapsed]: isCollapsed
		},
		classes.adminNavigationCollapsedProfile
	);

	return (
		<>
			<PaddingBox
				hrTiny={!isCollapsed}
				className={componentClassName}
			>
				<div
					ref={tooltipActionRef}
					onClick={() => setIsOpen(!isOpen)}
				>
					<img
						className={logoClassName}
						src={navProfile.imgUrl}
						alt="user_img"
					/>
				</div>
			</PaddingBox>
			{
				isOpen && (
					<OverlayPoint
						position="mobile-navigation"
						onClose={() => setIsOpen(!isOpen)}
						componentRef={tooltipActionRef.current}
						render={() => {
							return (
								<AdminNavigationCollapsedContent items={profileItem} />
							);
						}
						}
					/>
				)
			}
		</>
	);
};

export { AdminNavigationCollapsedProfile };
