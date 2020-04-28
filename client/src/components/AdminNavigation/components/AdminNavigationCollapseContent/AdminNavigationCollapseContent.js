import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from '../../../../baseComponents/Link';

import classes from './styles/index.scss';

class AdminNavigationCollapseContent extends Component {
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
				padding: 16
			} : {
				height: this.props.height,
				padding: 0,
			};
	}

	getNavCollapsedContent = () => {
		return this.props.items.map(item => {
			const content = (
				<div
					className={classes.adminNavigationListItemCollapseContent_itemContent}
				>
					{item.label}
					<div className={classes.adminNavigationListItemCollapseContent_itemIcon}></div>
				</div>
			);

			return (
				<div
					key={item.label}
					className={classes.adminNavigationListItemCollapseContent_item}
				>
					<Link
						content={content}
						link={item.link}
						hasRoute={item.hasRoute}
						className={classes.adminNavigationListItemCollapseContent_itemLink}
						activeLinkClass={classes.adminNavigationListItemCollapseContent_activeLink}
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
				className={classes.adminNavigationListItemCollapseContent}
			>
				<div>
					{this.getNavCollapsedContent()}
				</div>
			</div>
		);
	}
}

AdminNavigationCollapseContent.propTypes = {
	items: PropTypes.array.isRequired,
	height: PropTypes.number,
	setCollapseRef: PropTypes.func
};

export { AdminNavigationCollapseContent };