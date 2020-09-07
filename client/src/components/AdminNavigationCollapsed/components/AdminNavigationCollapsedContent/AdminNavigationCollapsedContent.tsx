import React, { Component } from 'react';

import Link from '../../../../baseComponents/Link';
import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';

import classes from './styles/index.scss';
import { Typography } from '../../../../baseComponents/Typography/Typography';

type AdminNavigationCollapsedContentType = {
    items: {
        label: string,
        link: string,
        hasRoute: boolean,
    }[],
    onClose?: () => void
};

class AdminNavigationCollapsedContent extends Component<AdminNavigationCollapsedContentType> {
	getNavCollapsedContent = () => {
		return this.props.items.map(item => {
			const content = (
				<div
					className={classes.adminNavigationCollapsedListItemCollapseContent_itemContent}
				>
					<Typography variant="14" displayBlock>{item.label}</Typography>
					<div className={classes.adminNavigationCollapsedListItemCollapseContent_itemIcon}></div>
				</div>
			);

			return (
				<div
					key={item.label}
					onClick={this.props.onClose}
					className={classes.adminNavigationCollapsedListItemCollapseContent_item}
				>
					<Link
						link={item.link}
						content={content}
						hasRoute={item.hasRoute}
						activeLinkClass={classes.adminNavigationCollapsedListItemCollapseContent_activeLink}
					/>
				</div>
			);
		});
	};

	render () {
		return (
			<PaddingBox
				tiny
				className={classes.adminNavigationListItemCollapseContent}
			>
				{this.getNavCollapsedContent()}
			</PaddingBox>
		);
	}
}

export { AdminNavigationCollapsedContent };
