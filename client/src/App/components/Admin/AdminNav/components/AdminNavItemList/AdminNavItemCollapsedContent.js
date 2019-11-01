import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from "../../../../../baseComponents/Link";
import { Icon } from '../../../../../baseComponents/Icon/Icon';

import styles from './styles/index.scss';
import { chevronRight } from "../../../../../icons/icons";

class AdminNavItemCollapsedContent extends Component {
	constructor(props) {
		super(props);
		this.componentRef = React.createRef();
	}

	getNavCollapsedContent = () => {
		return this.props.items.map(item => {
			return (
				<div
					key={item.label}
					className={styles.adminNavItemCollapsedContent_item}
				>
					<Icon
						className={styles.adminNavItemCollapsedContent_itemIcon}
						icon={chevronRight}
					/>
					<Link
						label={item.label}
						link={item.link}
						hasRoute={item.hasRoute}
					/>
				</div>
			)
		})
	};

	render () {
		return (
			<div
				className={styles.adminNavItemCollapsedContent}
				ref={this.componentRef}>
				{this.getNavCollapsedContent()}
			</div>
		);
	}
}

AdminNavItemCollapsedContent.propTypes = {
	items: PropTypes.array.isRequired
};

export { AdminNavItemCollapsedContent };
