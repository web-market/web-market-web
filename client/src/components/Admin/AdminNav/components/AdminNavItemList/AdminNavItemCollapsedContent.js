import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from '../../../../../baseComponents/Link';

import classes from './styles/index.scss';
import { PaddingBox } from '../../../../../baseComponents/PaddingBox/PaddingBox';

class AdminNavItemCollapsedContent extends Component {
	getNavCollapsedContent = () => {
		return this.props.items.map(item => {
			return (
				<div
					key={item.label}
					className={classes.adminNavItemCollapsedContent_item}
				>
					<Link
						content={item.label}
						link={item.link}
						hasRoute={item.hasRoute}
					/>
				</div>
			);
		});
	};

	render () {
		return (
			<PaddingBox
				vrSmall
				className={classes.adminNavItemCollapsedContent}
			>
				{this.getNavCollapsedContent()}
			</PaddingBox>
		);
	}
}

AdminNavItemCollapsedContent.propTypes = {
	items: PropTypes.array.isRequired
};

export { AdminNavItemCollapsedContent };
