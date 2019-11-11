import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from '../../../../../baseComponents/Link';

import classes from './styles/index.scss';

class AdminNavItemCollapsedContent extends Component {
	getNavCollapsedContent = () => {
		return this.props.items.map(item => {
			return (
				<div
					key={item.label}
					className={classes.adminNavItemCollapsedContent_item}
				>
					<Link
						label={item.label}
						link={item.link}
						hasRoute={item.hasRoute}
						activeLinkClass={classes.adminNavItemCollapsedContent_activeLink}
					/>
				</div>
			);
		});
	};

	render () {
		return (
			<div className={classes.adminNavItemCollapsedContent}>
				{this.getNavCollapsedContent()}
			</div>
		);
	}
}

AdminNavItemCollapsedContent.propTypes = {
	items: PropTypes.array.isRequired
};

export { AdminNavItemCollapsedContent };
