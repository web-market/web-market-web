import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';
import { OVERLAY_PORTAL } from './consts';
import { getOverlayPosition } from './utils';

const overlayPortalNode = document.getElementsByClassName(OVERLAY_PORTAL);

class OverlayPoint extends Component {
	constructor () {
		super();

		this.state = {
			hasMounted: false
		};
		this.layoutRef = createRef();
	}

	componentDidMount () {
		this.setState({ hasMounted: true });
	}

	render () {
		const {
			render,
			componentRef,
			position
		} = this.props;

		let style;

		const { width: parentWidth } = componentRef.getBoundingClientRect();

		if (this.state.hasMounted) {
			style = getOverlayPosition(componentRef, this.layoutRef.current, position);
		}

		return createPortal(
			<div
				ref={this.layoutRef}
				className={classes.layout}
				style={style}
			>
				{ render({ parentWidth }) }
			</div>,
			overlayPortalNode[0]
		);
	}
}

OverlayPoint.propTypes = {
	position: PropTypes.string,
	componentRef: PropTypes.object
};

export { OverlayPoint };
