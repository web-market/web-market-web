import React, { Component } from 'react';
import Link from "../../../../../baseComponents/Link";
import PropTypes from "prop-types";
// import PropTypes from 'prop-types';

class AdminNavItemCollapsedContent extends Component {
	constructor(props) {
		super(props);
		this.componentRef = React.createRef();
	}

	getNavCollapsedContent = () => {
		return this.props.items.map(item => {
			return (
				<Link
					key={item.label}
					label={item.label}
					link={item.link}
					hasRoute={item.hasRoute}
				/>
			)
		})
	};

	render () {
		return (
			<div ref={this.componentRef}>
				{this.getNavCollapsedContent()}
			</div>
		);
	}
}

AdminNavItemCollapsedContent.propTypes = {
	items: PropTypes.array.isRequired
};

export { AdminNavItemCollapsedContent };
