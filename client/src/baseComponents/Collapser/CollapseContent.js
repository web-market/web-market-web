import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CollapseContent extends Component {
	constructor (props) {
		super(props);
		this.componentRef = React.createRef();
	}

	render () {
		return (
			<div ref={this.componentRef}>
				{this.props.content}
			</div>
		);
	}
}

CollapseContent.defaultProps = {};
CollapseContent.propTypes = {
	content: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	])
};

export default CollapseContent;
