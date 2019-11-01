import React, { Component } from 'react';

import Link from "../../../../../baseComponents/Link";
import PropTypes from "prop-types";
// import PropTypes from 'prop-types';

import styles from './styles/index.scss';

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
