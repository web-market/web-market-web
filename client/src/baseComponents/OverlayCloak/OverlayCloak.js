import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import classes from './styles/index.scss';
import { noScroll } from '../../utils';

class OverlayCloak extends PureComponent {
	componentDidUpdate () {
		if (this.props.show) {
			noScroll(true);
		} else {
			noScroll(false);
		}
	}

	render () {
		const componentClassName = ClassNames(
			classes.overlay_cloak,
			{
				[classes.overlay_cloak__show]: this.props.show
			}
		);

		return (
			<div
				onClick={this.props.handleClose}
				className={componentClassName}
			>
			</div>
		);
	}
}

OverlayCloak.defaultProps = {
	handleClose: () => {}
};

OverlayCloak.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func
};

export { OverlayCloak };
