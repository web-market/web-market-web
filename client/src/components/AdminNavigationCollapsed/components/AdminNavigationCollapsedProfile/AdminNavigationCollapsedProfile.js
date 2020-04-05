import React, { useRef, useState } from 'react';

import PaddingBox from '../../../../baseComponents/PaddingBox';

import AdminNavigationCollapsedProfileCollapseContent from './AdminNavigationCollapsedProfileCollapseContent';
import { navProfile } from '../../staticData';

import classes from './styles/index.scss';
import OverlayPoint from '../../../../baseComponents/OverlayPoint';

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
						position="bottom-right-center"
						onClose={() => setIsOpen(!isOpen)}
						componentRef={tooltipActionRef.current}
						render={() => {
							return (
								<AdminNavigationCollapsedProfileCollapseContent />
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
