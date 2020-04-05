import React, { Component } from 'react';

import Link from '../../../../baseComponents/Link';
import PaddingBox from '../../../../baseComponents/PaddingBox';

import classes from './styles/index.scss';
import { profileItem } from './staticData/staticData';

class AdminNavigationCollapsedProfileCollapseContent extends Component {
	getItemContent = () => {
		return profileItem.map(item => {
			const content = (
				<div className={classes.adminNavigationCollapsedProfileCollapseContent_itemContent}>
					{item.label}
					<div className={classes.adminNavigationCollapsedProfileCollapseContent_itemIcon}></div>
				</div>
			);

			return (
				<div
					key={item.label}
					className={classes.adminNavigationCollapsedProfileCollapseContent_item}
				>
					<Link
						content={content}
						link={item.link}
						hasRoute={item.hasRoute}
						activeLinkClass={classes.adminNavigationCollapsedProfileCollapseContent_itemActiveLink}
					/>
				</div>
			);
		});
	};

	render () {
		return (
			<div
				className={classes.adminNavigationCollapsedProfileCollapseContent}
			>
				<PaddingBox
					tiny
				>
					{this.getItemContent()}
				</PaddingBox>
			</div>
		);
	}
}

export default AdminNavigationCollapsedProfileCollapseContent;
