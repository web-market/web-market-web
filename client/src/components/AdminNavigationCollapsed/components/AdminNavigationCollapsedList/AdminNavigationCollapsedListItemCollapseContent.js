import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from '../../../../baseComponents/Link';
import PaddingBox from '../../../../baseComponents/PaddingBox';

import classes from './styles/index.scss';

class AdminNavigationCollapsedListItemCollapseContent extends Component {
	getNavCollapsedContent = () => {
		return this.props.items.map(item => {
			const content = (
				<div
					className={classes.adminNavigationCollapsedListItemCollapseContent_itemContent}
				>
					{item.label}
					<div className={classes.adminNavigationCollapsedListItemCollapseContent_itemIcon}></div>
				</div>
			);

			return (
				<div
					key={item.label}
					className={classes.adminNavigationCollapsedListItemCollapseContent_item}
				>
					<Link
						content={content}
						link={item.link}
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

AdminNavigationCollapsedListItemCollapseContent.propTypes = {
	items: PropTypes.array.isRequired,
};

export { AdminNavigationCollapsedListItemCollapseContent };
