import React, { useRef, useState } from 'react';

import PaddingBox from '../../../../baseComponents/PaddingBox';
import AdminNavigationCollapsedContent from '../AdminNavigationCollapsedContent';

import { navProfile } from '../../../consts';

import classes from './styles/index.scss';
import OverlayPoint from '../../../../baseComponents/OverlayPoint';
import { profileItem } from './staticData/staticData';

const AdminNavigationCollapsedProfile = () => {
	const [isOpen, setIsOpen] = useState(false);

	const tooltipActionRef = useRef(null);

	return (
		<>
			<PaddingBox
				hrTiny
				className={classes.adminNavigationCollapsedProfile}
			>
				<div
					ref={tooltipActionRef}
					onClick={() => setIsOpen(!isOpen)}
				>
					<img
						className={classes.adminNavigationCollapsedProfile_userLogo}
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
								<AdminNavigationCollapsedContent items={profileItem}/>
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
