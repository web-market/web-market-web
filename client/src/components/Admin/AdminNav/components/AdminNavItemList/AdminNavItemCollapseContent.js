import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from '../../../../../baseComponents/Link';

import classes from './styles/index.scss';

class AdminNavItemCollapseContent extends Component {
	constructor (props) {
		super(props);
		this.collapseContent = React.createRef();
	}

	componentDidMount () {
		this.props.setCollapseRef(
			this.collapseContent.current
		);
	}

	get collapseHeight () {
		return this.props.height
			? {
				height: this.props.height,
				paddingTop: 16,
				paddingBottom: 16
			} : {
				height: this.props.height,
				paddingTop: 0,
				paddingBottom: 0
			};
	}

	getNavCollapsedContent = () => {
		return this.props.items.map(item => {
			const content = (
				<div
					className={classes.adminNavItemCollapsedContent_itemContent}
				>
					{item.label}
					<div className={classes.adminNavItemCollapsedContent_itemIcon}></div>
				</div>
			);

			return (
				<div
					key={item.label}
					className={classes.adminNavItemCollapsedContent_item}
				>
					<Link
						content={content}
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
			<div
				ref={this.collapseContent}
				style={this.collapseHeight}
				className={classes.adminNavItemCollapsedContent}
			>
				<div>
					{this.getNavCollapsedContent()}
				</div>
			</div>
		);
	}
}

AdminNavItemCollapseContent.propTypes = {
	items: PropTypes.array.isRequired,
	height: PropTypes.number,
	setCollapseRef: PropTypes.func
};

export { AdminNavItemCollapseContent };
