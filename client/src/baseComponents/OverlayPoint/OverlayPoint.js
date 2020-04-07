import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { AppGlobalContext } from '../../App/store/AppGlobalContext';
import classes from './styles/index.scss';
import { OVERLAY_PORTAL } from './consts';
import { getGeneralPosition, getDropdownPosition } from './utils';
import { noScroll } from '../../utils';

const overlayPortalNode = document.getElementsByClassName(OVERLAY_PORTAL)[0];

class OverlayPoint extends Component {
	static contextType = AppGlobalContext;

	constructor () {
		super();

		this.state = {
			hasMounted: false
		};
		this.layoutRef = createRef();
	}

	componentDidMount () {
		const { showOverlayCloak } = this.context;

		if (!showOverlayCloak) noScroll(true);

		this.setState({ hasMounted: true });
	}

	componentWillUnmount () {
		const { showOverlayCloak } = this.context;

		if (!showOverlayCloak) noScroll(false);
	}

	render () {
		const {
			render,
			onClose,
			position,
			componentRef,
			overlayBehavior,
		} = this.props;

		let style;

		const { width: parentWidth } = componentRef.getBoundingClientRect();

		if (this.state.hasMounted) {
			if (overlayBehavior === 'dropdown') {
				style = getDropdownPosition(componentRef, this.layoutRef.current);
			} else {
				style = getGeneralPosition(componentRef, this.layoutRef.current, position);
			}
		}

		return createPortal(
			<>
				<div
					style={style}
					ref={this.layoutRef}
					className={classes.layout}
				>
					{ render({ parentWidth, onClose }) }
				</div>
				<div
					onClick={onClose}
					className={classes.substrate}
				>
				</div>
			</>,
			overlayPortalNode
		);
	}
}

OverlayPoint.propTypes = {
	position: PropTypes.string,
	overlayBehavior: PropTypes.string,
	componentRef: PropTypes.object,
	onClose: PropTypes.func
};

export { OverlayPoint };
